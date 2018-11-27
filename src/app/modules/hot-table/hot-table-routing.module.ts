import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HandsTableComponent} from './hands-table/hands-table.component';

const routes: Routes = [
    {path: '', component: HandsTableComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HotTableRoutingModule {
}
