import { NgModule } from '@angular/core';
import { MpModalComponent } from './mp-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MpModalComponent],
  imports: [
    CommonModule
  ],
  exports: [MpModalComponent]
})
export class MpModalModule { }
