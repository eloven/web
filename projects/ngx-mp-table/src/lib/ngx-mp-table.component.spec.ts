import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMpTableComponent } from './ngx-mp-table.component';

describe('NgxMpTableComponent', () => {
  let component: NgxMpTableComponent;
  let fixture: ComponentFixture<NgxMpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
