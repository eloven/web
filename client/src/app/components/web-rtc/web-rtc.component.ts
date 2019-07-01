import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-web-rtc',
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.scss']
})
export class WebRtcComponent implements OnInit {
  @ViewChild('RtcVideo', {static: true}) videoEl: HTMLVideoElement;
  constructor() { }

  ngOnInit() {
  }

  openCamera() {
    console.log(this.videoEl);
  }

  closeCamera() {

  }

  recordVideo() {

  }

  closeRecord() {

  }

  connectServer() {

  }
}
