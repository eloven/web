import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { NgxMpLoadingComponent } from './ngx-mp-loading.component';

@Injectable({
  providedIn: 'root'
})
export class NgxMpLoadingService {

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { }

  create() {
    this.overlayRef = this.overlay.create({
      width: '500px',
      height: '200px',
    });
    const userProfilePortal = new ComponentPortal(NgxMpLoadingComponent);
    this.overlayRef.attach(userProfilePortal);
  }
}
