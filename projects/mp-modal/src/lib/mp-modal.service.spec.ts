import { TestBed } from '@angular/core/testing';

import { MpModalService } from './mp-modal.service';

describe('MpModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MpModalService = TestBed.get(MpModalService);
    expect(service).toBeTruthy();
  });
});
