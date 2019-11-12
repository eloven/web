import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeFormComponent } from './native-form.component';

describe('NativeFormComponent', () => {
  let component: NativeFormComponent;
  let fixture: ComponentFixture<NativeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
