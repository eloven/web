import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RenderComponent } from './render/render.component';

const routes: Routes = [
  {path: '', redirectTo: 'render'},
  {path: 'render', component: RenderComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class DirectiveRoutingModule {
}
