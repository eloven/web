import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {SharedModule} from '../shared/shared.module';
import {LoggerService} from './service/logger.service';
import {ProgressBarService} from './service/progress-bar.service';
import {HomeComponent} from './pages/home/home.component';
import {Error404Component} from './pages/error404/error404.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {HomeDashComponent} from './components/home-dash/home-dash.component';

@NgModule({
    declarations: [
        HomeComponent,
        Error404Component,
        HeaderComponent,
        FooterComponent,
        SearchBarComponent,
        SideMenuComponent,
        HomeDashComponent],
    imports: [
        SharedModule,
    ],
    exports: [
        SharedModule,
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
