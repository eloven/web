import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { BlankLayoutComponent } from './pages/blank-layout/blank-layout.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LayoutComponent, children: [
      {path: '', redirectTo: 'admin', pathMatch: 'full'},
      {path: 'admin', loadChildren: './pages/admin/index#AdminModule'},
      {path: 'dashboard', loadChildren: './pages/dashboard/index#DashboardModule'},
      {path: 'material', loadChildren: './material/index#MaterialPagesModule'},
      {path: 'directive', loadChildren: './directive/directive.module#DirectiveModule'},
      ]},
  {path: 'index', component: BlankLayoutComponent, children: [
      {path: '', redirectTo: 'user', pathMatch: 'full'},
      {path: 'user', loadChildren: './pages/user/index#UserModule'},
      {path: 'loading', loadChildren: './pages/landing/index#LandingModule'}
    ]},
  {path: '**', redirectTo: 'index', pathMatch: 'full'},
];

const config: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'disabled'
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
