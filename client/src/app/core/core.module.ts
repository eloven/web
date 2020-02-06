import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { throwIfAlreadyLoaded } from './skip-module';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent, LayoutComponent],
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatTreeModule, MatButtonModule, RouterModule],
  exports: [LayoutComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    throwIfAlreadyLoaded(parent, 'CoreModule');
  }
}
