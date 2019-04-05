import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';

import { HtmlPipe } from './pipes/html.pipe';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingCache } from './app-routing-cache';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    HtmlPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: RouteReuseStrategy, useClass: AppRoutingCache }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
