import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  data: any;
  constructor(@Inject(MAT_SNACK_BAR_DATA) private message: any) { }

  ngOnInit() {
    this.data = this.message || '';
  }
}
