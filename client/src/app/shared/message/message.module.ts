import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: '' }],
  entryComponents: [MessageComponent]
})
export class MessageModule {
}
