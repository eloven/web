import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'material', loadChildren: './material/index#MaterialPagesModule'},
  {path: 'directive', loadChildren: './directive/directive.module#DirectiveModule'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
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
