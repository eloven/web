import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMpLoadingComponent } from './ngx-mp-loading.component';

describe('NgxMpLoadingComponent', () => {
  let component: NgxMpLoadingComponent;
  let fixture: ComponentFixture<NgxMpLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMpLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMpLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
