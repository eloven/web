import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
