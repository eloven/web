import { TestBed } from '@angular/core/testing';

import { MpInputService } from './mp-input.service';

describe('MpInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MpInputService = TestBed.get(MpInputService);
    expect(service).toBeTruthy();
  });
});
