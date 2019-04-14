import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  configUrl = 'http://127.0.0.1:4000/users';

  constructor(private http: HttpClient) { }

  getConfigResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.configUrl, { observe: 'response'});
  }
}
