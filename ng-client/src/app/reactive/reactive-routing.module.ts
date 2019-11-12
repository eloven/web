import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NativeFormComponent } from './native-form/native-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'native-form', pathMatch: 'full'},
  {path: 'native-form', component: NativeFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'template-form', component: TemplateFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule {
}
