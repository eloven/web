import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    private apiSubject = {};

    private onlyOneHttpRequest(url): boolean {
        if (!this.apiSubject[url]) {
            this.apiSubject[url] = {
                time: new Date().getTime()
            };
            return true;
        } else {
            const _time = new Date().getTime();
            // 单一请求间隔 2000ms
            if ((_time - this.apiSubject[url].time) > 1000) {
                this.apiSubject[url] = {
                    time: new Date().getTime()
                };
                return true;
            } else {
                // console.log('请求过于频繁');
                return false;
            }
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const _can = this.onlyOneHttpRequest(req.url);
        if (_can) {
            return next.handle(req);
        } else {
            // 请求过于频繁
            return next.handle(null);
        }
    }
}

