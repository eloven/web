import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-layout',
  templateUrl: './pc-layout.component.html',
  styleUrls: ['./pc-layout.component.scss']
})
export class PcLayoutComponent implements OnInit {

  routerList = [
    {path: 'home', text: 'Home模块'},
    {path: 'rtc', text: 'WebRtc'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
