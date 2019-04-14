import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingCache } from './app-routing-cache';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './pages/layout/layout.component';
import { BlankLayoutComponent } from './pages/blank-layout/blank-layout.component';

import { httpInterceptorProviders } from './service/http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BlankLayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    httpInterceptorProviders,
    { provide: RouteReuseStrategy, useClass: AppRoutingCache },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
