import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'ngx-mp-loading',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  animations: [
    trigger(
      'openClose', [
        state('open', style({
          color: '#f3000e'
        })),
        state('close', style({
          display: 'none'
        })),
        transition('open => close', [
          animate(1000)
        ])
      ]
    )
  ]
})
export class NgxMpLoadingComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  set timer(t: number) {
    this._timer = t;
  }

  get timer(): number {
    return this._timer;
  }

  private _timer = 3000;

  isOpen = true;

  constructor() {
  }

  ngOnInit() {}
}
