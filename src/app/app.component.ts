import { Component } from '@angular/core';
import { NgxMpLoadingService } from '../../projects/ngx-mp-loading/src/lib/ngx-mp-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-pro';

  constructor(private ngx: NgxMpLoadingService) {
  }

  showService() {
    this.ngx.create();
  }
}
