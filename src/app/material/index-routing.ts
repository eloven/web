import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpDragComponent } from './mp-drag/mp-drag.component';
import { MpTreeComponent } from './mp-tree/mp-tree.component';
import { MpTableComponent } from './mp-table/mp-table.component';

const routes: Routes = [
  {path: '', redirectTo: 'drag', pathMatch: 'full'},
  {path: 'drag', component: MpDragComponent},
  {path: 'tree', component: MpTreeComponent},
  {path: 'table', component: MpTableComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialRoutingModule {
}
