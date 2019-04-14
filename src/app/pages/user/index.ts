import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user.routing.module';
import { AppMaterialModule } from '../../shared/app.material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    UserRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class UserModule { }
