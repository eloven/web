import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { LoginComponent } from './login/login.component'
import { CardWarpComponent } from '../components/card-warp/card-warp.component'
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, CardWarpComponent],
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  exports: [HeaderComponent, FooterComponent, LoginComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在')
    }
  }
}
