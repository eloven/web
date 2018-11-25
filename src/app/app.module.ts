import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProgressInterceptor} from './interceptors/progress.interceptor';
import {TimingInterceptor} from './interceptors/timing.interceptor';
import {ProgressBarService} from './core/service/progress-bar.service';
import {NoopInterceptor} from './interceptors/noop.interceptor';
import { LoginComponent } from './auth/login/login.component';
import {AuthService} from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService]},
        {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
