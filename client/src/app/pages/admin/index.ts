import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { AppMaterialModule } from '../../shared/app.material.module';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    AdminRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class AdminModule { }
