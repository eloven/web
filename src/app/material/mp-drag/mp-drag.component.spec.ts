import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MpDragComponent } from './mp-drag.component';

describe('MpDragComponent', () => {
  let component: MpDragComponent;
  let fixture: ComponentFixture<MpDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpDragComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
