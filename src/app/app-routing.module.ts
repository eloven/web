import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/pages/home/home.component';
import {Error404Component} from './core/pages/error404/error404.component';
import {LoginComponent} from './auth/login/login.component';
import {LoginGuard} from './settings/login.guard';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'notfound', component: Error404Component},
    {path: '**', redirectTo: 'notfound', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
