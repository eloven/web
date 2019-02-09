import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMpLoadingModule } from 'ngx-mp-loading';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMpLoadingModule,
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
