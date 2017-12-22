import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingService } from '../Component/Loading/loading.component';

export interface DataType {
    [propName: string]: any;
}

abstract class HttpHandler {

    abstract post (url: string, template: string): any;

    abstract get (url: string): any;
}

@Injectable()
export class Handler implements HttpHandler, OnInit {

    private httpTemplate?: string;
    private httpUrl: string;
    private data: any;


    constructor(
        private http?: HttpClient,
        private loadingService?: LoadingService
    ) {}

    ngOnInit() {
    }

    public post (url: string, template: any): any {

        // 第一种实现方式
        return this.http
                   .post(url, template)
                   .toPromise();

        // 第二种直接返回http让调用者决定返回数据的逻辑
        // return this.http.post(url, template).subscribe();
    }
    public get(url: string) {

        return this.http.get<DataType>(url)
            .toPromise();
    }
}
