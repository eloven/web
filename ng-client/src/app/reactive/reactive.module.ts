import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NativeFormComponent } from './native-form/native-form.component';



@NgModule({
  declarations: [TemplateFormComponent, ReactiveFormComponent, NativeFormComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
  ]
})
export class ReactiveModule { }
