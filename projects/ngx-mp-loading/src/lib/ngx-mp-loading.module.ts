import { NgModule } from '@angular/core';
import { NgxMpLoadingComponent } from './ngx-mp-loading.component';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { NgxMpLoadingService } from './ngx-mp-loading.service';


@NgModule({
  declarations: [
    NgxMpLoadingComponent
  ],
  imports: [
    OverlayModule,
  ],
  exports: [
    NgxMpLoadingComponent
  ],
  providers: [
    NgxMpLoadingService,
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  entryComponents: [
    NgxMpLoadingComponent
  ]
})
export class NgxMpLoadingModule {
}
