import { Injectable } from '@angular/core';
import { MessageOptions } from './message.options';
import { MessageComponent } from './message.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MessageModule } from './message.module';

@Injectable({
  providedIn: MessageModule
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) { }

  open(messageOptions: MessageOptions): MatSnackBarRef<MessageComponent> {
    return this.snackBar.openFromComponent(MessageComponent, {
      duration: messageOptions.duration || 2000,
      verticalPosition: 'top',
      data: messageOptions.message,
      panelClass: messageOptions.type
    });
  }

  success(text: string) {
    this.open({ type: 'success', message: text });
  }

  error(text: string) {
    this.open({ type: 'error', message: text });
  }

  warning(text: string) {
    this.open({ type: 'warning', message: text });
  }

  info(text: string) {
    this.open({ type: 'info', message: text });
  }
}
