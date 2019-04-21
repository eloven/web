import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpModalComponent } from './mp-modal.component';

describe('MpModalComponent', () => {
  let component: MpModalComponent;
  let fixture: ComponentFixture<MpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
