import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';
import { AppMaterialModule } from '../shared/app.material.module';
import { CommonModule } from '@angular/common';
import { StopPropagationDirective } from '../directive/stop-propagation.directive';


@NgModule({
  declarations: [
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    StopPropagationDirective,
    ],
  imports: [
    AppMaterialModule,
    CommonModule,
  ],
  exports: [
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    if (parent) {
      throw Error('模块已经存在, 不能再次加载！');
    }
    // load icons
    loadSvgResources(iconRegistry, sanitizer);
  }
}
