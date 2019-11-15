import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(environment)
  }
}
