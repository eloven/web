import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {SharedModule} from '../shared/shared.module';
import {LoggerService} from './service/logger.service';
import {ProgressBarService} from './service/progress-bar.service';
import {HomeComponent} from './pages/home/home.component';
import {Error404Component} from './pages/error404/error404.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {HomeDashComponent} from './components/home-dash/home-dash.component';


@NgModule({
    declarations: [
        HomeComponent,
        Error404Component,

        SideMenuComponent,
        HomeDashComponent,
        ],
    imports: [
        SharedModule,
    ],
    exports: [
        SharedModule,
        HomeComponent,
    ],
    providers: [
        LoggerService,
        ProgressBarService,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
