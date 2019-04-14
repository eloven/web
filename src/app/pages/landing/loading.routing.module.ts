import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SliderPageComponent } from './slider-page/slider-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'slider', pathMatch: 'full'},
  {path: 'slider', component: SliderPageComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [SliderPageComponent]
})
export class LoadingRoutingModule {
}
