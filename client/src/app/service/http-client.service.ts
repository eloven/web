import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


interface IResponseData {
  code: number;
  data: object;
  msg: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  configUrl = 'http://localhost:4000/';

  /**
   * json to FormData
   * @param object
   */
  static jsonToFormData(object): FormData {
    const form = new FormData();
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (typeof object[key] === 'object') {
          form.append(key, JSON.stringify(object[key]));
        } else {
          form.append(key, object[key]);
        }
      }
    }
    return form;
  }

  static buildUrlSearchParams(object): string {
    let res = '?';
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        res += `${key}=${object[key]}&`;
      }
    }
    return res.substring(0, res.length - 1);
  }

  constructor(private http: HttpClient) {
  }

  postJson(url: string, body: object | string) {
    if (typeof body === 'object') {
      return this.http.post(this.configUrl + url, JSON.stringify(body), {observe: 'body'});
    } else {
      return this.http.post(this.configUrl + url, body, {observe: 'body'});
    }
  }

  postFormData(url: string, body: FormData | object, progress?: boolean): Observable<HttpEvent<any> | object> {
    if (typeof body === 'object') {
      const data = HttpClientService.jsonToFormData(body);
      if (progress) {
        return this.http.post(this.configUrl + url, data, {observe: 'events', reportProgress: true});
      } else {
        return this.http.post(this.configUrl + url, data, {observe: 'body'});
      }
    } else {
      if (progress) {
        return this.http.post(this.configUrl + url, body, {observe: 'events', reportProgress: true});
      } else {
        return this.http.post(this.configUrl + url, body, {observe: 'body'});
      }
    }
  }

  /**
   * HttpEventType.UploadProgress
   * HttpEventType.Response
   * @param url
   * @param body
   */
  postFileProgress(url: string, body: File): Observable<HttpEvent<any>> {
    return this.http.post(this.configUrl + url, body, {
      observe: 'events',
      reportProgress: true,
    });
  }

  /**
   * search
   * @param url
   * @param body
   */
  getByParams(url: string, body: object): Observable<any> {
    if (body) {
      return this.http.get(this.configUrl + url + HttpClientService.buildUrlSearchParams(body));
    } else {
      return this.http.get(this.configUrl + url, {observe: 'body'});
    }
  }

  /**
   * 读取完整响应体
   */
  getConfigResponse(url?: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.configUrl + url, {observe: 'response'});
  }

  /**
   * api 统一处理响应
   * @param res
   */
  private handleResponseData(res: IResponseData) {
    switch (res.code) {
      case 0:
        return res.data;
      case 1:
        return res.data;
      case 2:
        return res.data;
      default:
        return res;
    }
  }
}
