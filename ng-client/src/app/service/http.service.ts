import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'
import { Resp } from '../model/Resp'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '',
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  get(url: string, params: object): Observable<Resp> {
    return this.http.get(environment.api + url) as Observable<Resp>
  }

  post(url: string, data: object): Observable<Resp> {
    return this.http.post(environment.api + url, data, httpOptions) as Observable<Resp>
  }
}
