import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../service/http.service'

@Component({
  selector: 'app-native-form',
  templateUrl: './native-form.component.html',
  styleUrls: ['./native-form.component.scss']
})
export class NativeFormComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {
    // this.http.get('/data', {}).subscribe(res => {
    //     console.log(res)
    //   }, error => {
    //     console.log(error)
    //   },
    //   () => {
    //     console.log('complete')
    //   }
    // )
  }
}
