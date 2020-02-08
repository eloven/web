import { Injectable } from '@angular/core';
import { DialogModule } from './dialog.module';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: DialogModule
})
export class DialogService {
  private queue: OverlayRef[] = [];

  constructor(private overlay: Overlay) { }

  open() {
    const last = this.queue.pop();
    if (last) {
      last.dispose();
    }
    const overlayRef: OverlayRef = this.overlay.create({ width: 600, height: 200 });
    const dialogComponentComponentPortal = new ComponentPortal(DialogComponent);
    overlayRef.attach(dialogComponentComponentPortal);
    this.queue.push(overlayRef);
  }
}
