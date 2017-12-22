import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpInterceptor,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';


abstract class HttpCache {

    abstract get (request: HttpRequest<any>): HttpResponse<any> | null;

    abstract put (request: HttpRequest<any>, response: HttpResponse<any>): void;
}

@Injectable()
export class CacheService implements HttpInterceptor {

    constructor(private cache: HttpCache) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        if (req.method !== 'GET') {
            return next.handle(req);
        }
        const cacheResponse = this.cache.get(req);

        if (cacheResponse != null) {

            return Observable.of(cacheResponse);
        }

        return next.handle(req).do(event => {

            if (event instanceof HttpResponse) {
                this.cache.put(req, event);
            }
        });
    }
}
