import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import { Router } from '@angular/router';
import { ISideNavData, SIDE_NAV_DATA } from '../../config/mock-data';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {

  sideNavData: ISideNavData[] = SIDE_NAV_DATA;
  constructor(private http: HttpClientService, private router: Router) {}

  ngOnInit() {
    this.sideNavData[0].isActive = true;
  }

  onClickMenu(menu) {
    const next = !menu.isOpen;
    this.resetMenuData();
    this.sideNavData.forEach(el => el.isOpen = false);
    menu.isOpen = next;
    menu.isActive = true;
  }

  selectSubMenu(sub) {
    this.resetMenuData();
    sub.isActive = true;
    this.routerTo(sub.path);
  }

  routerTo(p: string) {
    if (p === 'home/dashboard') {
      this.resetMenuData();
      this.sideNavData[0].isActive = true;
    }
    this.router.navigate([p]);
  }

  private resetMenuData() {
    this.sideNavData.forEach(el => {
      el.isActive = false;
      el.children.forEach(item => {
        item.isActive = false;
      });
    });
  }
}
