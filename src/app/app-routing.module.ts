import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './core/pages/home/home.component';
import {Error404Component} from './core/pages/error404/error404.component';
import {LoginComponent} from './auth/login/login.component';
import {LayoutComponent} from './pages/layout.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'index', component: LayoutComponent, children: [
            {path: '', redirectTo: 'filebase', pathMatch: 'full'},
            {path: 'filebase', loadChildren: './modules/file-base/file-base.module#FileBaseModule'},
            {path: 'table', loadChildren: './modules/hot-table/hots-table.module#HotsTableModule'}
        ]
    },
    {path: 'notfound', component: Error404Component},
    {path: '**', redirectTo: 'notfound', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
