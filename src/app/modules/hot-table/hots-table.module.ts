import {NgModule} from '@angular/core';

import {HotTableRoutingModule} from './hot-table-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {HandsTableComponent} from './hands-table/hands-table.component';


@NgModule({
    declarations: [HandsTableComponent],
    imports: [
        SharedModule,
        HotTableRoutingModule,
    ]
})
/**
 * self table class module
 */
export class HotsTableModule {
}
