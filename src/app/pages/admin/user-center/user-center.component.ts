import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss']
})
export class UserCenterComponent implements OnInit {

  dataList$: Observable<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
