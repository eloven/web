import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MpTableDataSource } from './mp-table-datasource';

@Component({
  selector: 'app-mp-table',
  templateUrl: './mp-table.component.html',
  styleUrls: ['./mp-table.component.css'],
})
export class MpTableComponent implements OnInit {
  @ViewChild(MatPaginator, {read: 'paginator', static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {read: 'sort', static: false}) sort: MatSort;
  dataSource: MpTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MpTableDataSource(this.paginator, this.sort);
  }
}
