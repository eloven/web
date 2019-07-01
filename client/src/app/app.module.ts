import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { PcLayoutComponent } from './core/pc-layout/pc-layout.component';
import { MatButtonModule, MatGridListModule } from '@angular/material';
import { WebRtcComponent } from './components/web-rtc/web-rtc.component';

@NgModule({
  declarations: [
    AppComponent,
    PcLayoutComponent,
    WebRtcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
