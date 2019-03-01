import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpDragComponent } from './mp-drag/mp-drag.component';
import { MpTableComponent } from './mp-table/mp-table.component';
import { MpTreeComponent } from './mp-tree/mp-tree.component';
import { AppMaterialModule } from '../shared/app.material.module';
import { MaterialRoutingModule } from './index-routing';

@NgModule({
  declarations: [
    MpDragComponent,
    MpTableComponent,
    MpTreeComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MaterialRoutingModule,
  ]
})
export class MaterialPagesModule { }
