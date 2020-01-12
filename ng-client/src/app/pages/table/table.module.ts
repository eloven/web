import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TableRoutingModule } from './table-routing.module'
import { PageTableComponent } from './page-table/page-table.component'

@NgModule({
  declarations: [PageTableComponent],
  imports: [CommonModule, TableRoutingModule]
})
export class TableModule {}
