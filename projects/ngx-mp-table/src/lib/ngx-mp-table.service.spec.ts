import { TestBed } from '@angular/core/testing';

import { NgxMpTableService } from './ngx-mp-table.service';

describe('NgxMpTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMpTableService = TestBed.get(NgxMpTableService);
    expect(service).toBeTruthy();
  });
});
