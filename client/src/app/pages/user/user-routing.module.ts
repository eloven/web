import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterVm } from '../../utils/router.vm';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: ListComponent },
  { path: 'user-detail', component: DetailComponent }
];
export const USER_ROUTES: RouterVm[] = [
  { fullPath: 'user/register', title: '注册' },
  { fullPath: 'user/login', title: '登录' },
  { fullPath: 'user/user-list', title: '用户列表' },
  { fullPath: 'user/user-detail', title: '用户详情' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule {
}
