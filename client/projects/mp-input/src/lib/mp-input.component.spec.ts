import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpInputComponent } from './mp-input.component';

describe('MpInputComponent', () => {
  let component: MpInputComponent;
  let fixture: ComponentFixture<MpInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
