import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent, LayoutComponent],
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule],
  exports: [LayoutComponent]
})
export class CoreModule {
  constructor() {}
}
