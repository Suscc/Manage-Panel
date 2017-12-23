import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { TokenService } from '@framework/Service/token.service';
import PromptLayer from '@framework/lib/PromptLayer';

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

    constructor(private http?: HttpClient) {
        console.log(11111);
    }

    /*
        url: 接口地址,
        task: 参数,
        method: http方法,
        func: http成功后的回调函数
    */
    push (url: string, task: any, method: string, func: Function) {

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

        console.log('request', this.token);

        this.isRunning = false;

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

                    console.log(res);

                    localStorage.setItem('userToken', res.new_Token);
                    this.token = res.new_Token;

                    if (res.error === '47006') {
                        PromptLayer.show({
                            str: '登录失败。请稍后重试'
                        });
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

                            console.log('调用了： ',    this.queue.length);
                            // Promise.resolve(() => setTimeout(() => this.run()));
                            setTimeout(() => this.run());
                        }else {

                            this.loop = false;
                        }
                    });
                });
        }
    }
}
