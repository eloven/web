import { NgModule } from '@angular/core';
import { RenderComponent } from './render/render.component';
import { DirectiveRoutingModule } from './directive-routing.module';
import { HtmlPipe } from '../utils/pipes/html.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RenderComponent,
    HtmlPipe,
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule,
  ]
})
export class DirectiveModule { }
