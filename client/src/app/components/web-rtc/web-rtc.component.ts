import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

declare var RecordRTCPromisesHandler;
declare var invokeSaveAsDialog;
let recorder: any;

@Component({
  selector: 'app-web-rtc',
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebRtcComponent implements OnInit, AfterViewInit {

  @ViewChild('RtcVideo', {static: true}) videoEl: ElementRef;
  video: HTMLVideoElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.video = this.videoEl.nativeElement;
  }

  openCamera() {
    console.log(this.video);
  }

  closeCamera() {

  }

  recordVideo() {
    this.startRecord().then(() => {
      console.log('正在录像');
    });
  }

  closeRecord() {
    recorder.stopRecording(() => {
       const blob = recorder.getBlob();
       console.log(blob);
     });
    console.log('停止录像');
  }

  onDownload() {
    const blob = recorder.getBlob();
    console.log(blob.__zone_symbol__value);
    invokeSaveAsDialog(blob.__zone_symbol__value);
  }

  connectServer() {

  }

  async startRecord() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    recorder = new RecordRTCPromisesHandler(stream, {
      type: 'video',
      mimeType: 'video/webm',
      timeSlice: 2000,
      ondataavailable: (blob) => {
        console.log(blob);
        // const reader = new FileReader();
        // reader.readAsArrayBuffer(blob);
        // reader.onloadend = () => {
        //   console.log(reader.result);
        //   this.uploadBuffer(reader.result as ArrayBuffer);
        // };
        this.uploadBuffer(blob);
      },
      canvas: {
        width: 720,
        height: 480
      }
    });
    recorder.startRecording();
  }

  private uploadBuffer(buff: any) {
    const form = new FormData();
    form.append('file', buff);
    fetch('http://127.0.0.1:9001/root/buff', {
      method: 'post',
      mode: 'cors',
      body: form
    }).then(res => {
      console.log(res);
    });
  }
}
