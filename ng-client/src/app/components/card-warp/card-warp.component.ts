import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-warp',
  templateUrl: './card-warp.component.html',
  styleUrls: ['./card-warp.component.scss']
})
export class CardWarpComponent implements OnInit {
  @Input() flex: string
  cardStyle = {
    flexDirection: 'row'
  }

  constructor() {}

  ngOnInit() {
    this.cardStyle = {
      flexDirection: this.flex
    }
  }
}
