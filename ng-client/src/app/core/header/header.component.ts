import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeIndex = 0
  routerLinkList = [
    { path: 'login', text: 'User' },
    { path: 'table', text: 'Table' },
    { path: 'form', text: 'Form' }
  ]

  constructor(private router: Router) {}

  ngOnInit() {
    this.initActive()
  }

  navToPath(p: string, i: number) {
    this.router
      .navigate([p])
      .then(() => {
        this.activeIndex = i
      })
      .catch(() => {
        history.go(-1)
      })
  }

  private initActive() {
    for (let i = 0; i < this.routerLinkList.length; i++) {
      const activatedRouteElement = this.routerLinkList[i]
      if (window.location.href.includes(activatedRouteElement.path)) {
        this.activeIndex = i
        return
      }
    }
    this.activeIndex = 0
  }
}
