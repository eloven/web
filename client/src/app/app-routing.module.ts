import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcLayoutComponent } from './core/pc-layout/pc-layout.component';
import { WebRtcComponent } from './components/web-rtc/web-rtc.component';

const routes: Routes = [
  {path: '', redirectTo: 'pc', pathMatch: 'full'},
  {path: 'pc', component: PcLayoutComponent, children: [
      {path: '', redirectTo: 'rtc', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)},
      {path: 'rtc', component: WebRtcComponent}
  ]},
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
