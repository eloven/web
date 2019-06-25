import { Component } from '@angular/core';
import { NestSocketService } from './service/nest.socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private nest: NestSocketService) {}
}
