import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  private authToken = 'xml2oops0md19';

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 克隆请求头, 统一添加 Authorization
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.authToken)
    });
    return next.handle(authReq);
  }
}
