import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './exception/error-page/error-page.component';
import { NotFoundComponent } from './exception/not-found/not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ErrorPageComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorPageComponent,
    NotFoundComponent,
  ]
})
export class SharedModule {
}
