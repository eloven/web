import { Injectable } from '@angular/core';
import { DialogModule } from './dialog.module';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: DialogModule
})
export class DialogService {
  private _queue: OverlayRef[] = [];
  constructor(private _overlay: Overlay,) { }

  open() {
    const last = this._queue.pop();
    if (last) {
      last.dispose();
    }
    const overlayRef: OverlayRef = this._overlay.create({width: 600, height: 200});
    const dialogComponentComponentPortal = new ComponentPortal(DialogComponent);
    overlayRef.attach(dialogComponentComponentPortal);
    this._queue.push(overlayRef);
  }
}
