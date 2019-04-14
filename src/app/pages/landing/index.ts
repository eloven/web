import { NgModule } from '@angular/core';

import { LoadingRoutingModule } from './loading.routing.module';
import { AppMaterialModule } from '../../shared/app.material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    LoadingRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class LandingModule { }
