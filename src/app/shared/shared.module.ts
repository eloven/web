import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './exception/error-page/error-page.component';
import { NotFoundComponent } from './exception/not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { HtmlPipe } from '../utils/pipes/html.pipe';

@NgModule({
  declarations: [
    ErrorPageComponent,
    NotFoundComponent,
    HtmlPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorPageComponent,
    NotFoundComponent,
    HtmlPipe
  ]
})
export class SharedModule {
}
