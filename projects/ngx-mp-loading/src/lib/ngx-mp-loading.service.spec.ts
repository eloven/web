import { TestBed } from '@angular/core/testing';

import { NgxMpLoadingService } from './ngx-mp-loading.service';

describe('NgxMpLoadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMpLoadingService = TestBed.get(NgxMpLoadingService);
    expect(service).toBeTruthy();
  });
});
