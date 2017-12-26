import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { TokenService } from '@framework/Service/token.service';
import PromptLayer from '@framework/lib/PromptLayer';
import { LoadingService } from '@framework/Component/Loading/loading.component';
import { DebugService } from '@framework/Service/debug.service';

interface DataType {
    [propName: string]: any;
}

@Injectable()
export class EventQueue {

    private queue = []; // 任务队列

    public func: Function;
    public pause = false;

    public token: string = localStorage.getItem('userToken');

    private isRunning;
    private loop = false; // 队列循环

    constructor(private http?: HttpClient, private loadingService?: LoadingService, private debug?: DebugService) {}

    /*
        url: 接口地址,
        task: 参数,
        method: http方法,
        func: http成功后的回调函数,
        errFunc: http失败后的回调函数，可不传
    */
    push (url: string, task: any, method: string, func: Function, errFunc?: Function) {

        this.queue.push({
            url: url,
            task: task,
            method: method,
            func: func
        });

        if (this.loop === false) {

            this.run();
            this.loop = true;
        }
    }

    private run() {

        this.isRunning = false;
        this.loadingService.show.emit(null);

        const queueItem = this.queue.shift();
        if (queueItem.method === 'post' || queueItem.method === 'Post' || queueItem.method === 'POST') {

            this.http
                .post<DataType>(queueItem.url, {

                    "validate_k": "2",
                    "adminUsers": {
                        "Aname": environment.user.Aname,
                        "token": this.token
                    },
                    "params": [queueItem.task]
                }, {

                    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
                }).toPromise().then((res) => {

                    this.isRunning = true;

                    this.debug.log('请求参数：', queueItem.task);
                    this.debug.log('返回结果：', res);

                    localStorage.setItem('userToken', res.new_Token);
                    this.token = res.new_Token;

                    if (res.error === '47006') {

                        layer.msg('登录失败,请稍后重试');

                        environment.isLogin = false;
                        localStorage.setItem('userToken', '');
                        // 登陆失败就调回到登录页面
                        window.location.href = "/login";
                        return;
                    } else if (res.error !== 'SUCESS') {
                        // 出错
                    }
                    environment.isLogin = true;

                    return res;
                }).then((res) => {

                    Promise.resolve(queueItem.func(res)).then(() => {

                        this.isRunning = false;

                        if (this.queue.length !== 0 && !this.isRunning && !this.pause) {

                            this.debug.log("任务队列还有：", this.queue.length);
                            setTimeout(() => this.run());
                        }else {

                            this.loop = false;
                            // 隐藏loading动画
                            this.loadingService.hide.emit(null);
                        }
                    });
                }).catch((err) => {

                    queueItem.errFunc === void (0) ? layer.msg('网络开小差了,请稍后重试') : queueItem.errFunc();
                });
        }
    }
}
