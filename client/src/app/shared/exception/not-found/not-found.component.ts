import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', { static: true }) dom: ElementRef;

  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initProps();
    this.render().then(() => {
      console.log('render 完成');
    }).catch(err => {
      console.log(err);
    });
  }

  send() {
  }

  private initProps() {
    this.canvas = this.dom.nativeElement as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
  }

  private render(): Promise<null> {
    return new Promise((resolve, reject) => {
      try {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = '#368833';
        this.context.fillRect(10, 10, 100, 100);
        resolve();
      } catch (error) {
        console.error(error.message);
        reject(error.message);
      }
    });
  }

}
