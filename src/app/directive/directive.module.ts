import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderComponent } from './render/render.component';
import { DirectiveRoutingModule } from './directive-routing.module';

@NgModule({
  declarations: [RenderComponent],
  imports: [
    CommonModule,
    DirectiveRoutingModule,
  ]
})
export class DirectiveModule { }
