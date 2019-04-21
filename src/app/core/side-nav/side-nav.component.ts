import {Component, Input, OnInit} from '@angular/core';
import {HttpClientService} from '../../service/http-client.service';
import {Router} from '@angular/router';
import {ISideNavData, SIDE_NAV_DATA} from '../../config/mock-data';
import {easeInOut} from '../../animate/ease-in-out';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [easeInOut],
})
export class SideNavComponent implements OnInit {


  @Input() isOpenSideNav: boolean;

  sideNavData: ISideNavData[] = SIDE_NAV_DATA;

  constructor(private http: HttpClientService, private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * 主菜单控制
   * @param menu
   */
  onClickMenu(menu) {
    const next = !menu.isOpen;
    this.resetMenuData();
    this.sideNavData.forEach(el => el.isOpen = false);
    menu.isOpen = next;
    menu.isActive = true;
  }

  /**
   * 子菜单控制
   * 打开侧边栏 / 关闭侧边栏
   * @param sub
   * @param menu
   */
  selectSubMenu(sub, menu?: ISideNavData) {
    if (!this.isOpenSideNav) {
      this.resetMenuData();
      sub.isActive = true;
      this.routerTo(sub.path);
      menu.isOpen = false;
      menu.isActive = true;
    } else {
      this.resetMenuData();
      sub.isActive = true;
      this.routerTo(sub.path);
    }
  }

  /**
   * 导航
   * @param p
   */
  routerTo(p: string) {
    if (p === 'home/dashboard') {
      this.resetMenuData();
      this.sideNavData[0].isActive = true;
    }
    this.router.navigate([p]);
  }

  /**
   * 重置状态
   */
  private resetMenuData() {
    this.sideNavData.forEach(el => {
      el.isActive = false;
      el.children.forEach(item => {
        item.isActive = false;
      });
    });
  }
}
