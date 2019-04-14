import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../service/http-client.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {

  constructor(private http: HttpClientService) { }

  ngOnInit() {
    // this.http.getConfigResponse('users').subscribe(res => {
    //   console.log(res.headers.keys());
    // });
    this.http.getByParams('users', {name: 'jack'}).subscribe(res => {
      console.log(res);
    });
    // this.http.postJson('users', {name: 'jack'}).subscribe(res => {
    //   console.log(res);
    // });
    // this.http.postFormData('users', {name: 'jack'}).subscribe(res => {
    //   console.log(res);
    // });
  }

}
