import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorShowComponent } from './error-show.component';

describe('ErrorShowComponent', () => {
  let component: ErrorShowComponent;
  let fixture: ComponentFixture<ErrorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
