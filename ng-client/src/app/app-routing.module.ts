import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './layout/login/login.component'
import { LoginGuard } from './guard/login.guard'

const routes: Routes = [
  { path: '', redirectTo: 'reactive', pathMatch: 'full' },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive').then(m => m.ReactiveModule),
    canLoad: [LoginGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
