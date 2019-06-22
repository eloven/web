import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTableComponent } from './write-table.component';

describe('WriteTableComponent', () => {
  let component: WriteTableComponent;
  let fixture: ComponentFixture<WriteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
