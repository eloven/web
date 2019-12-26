import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routerLinkList = [
    { path: '', text: '表单' },
    { path: '', text: 'Http' }
  ]
  constructor(private router: Router) {}

  ngOnInit() {}

  navToPath(p: string) {
    this.router
      .navigate([p])
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
