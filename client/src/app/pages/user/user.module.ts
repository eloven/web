import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../../shared/message/message.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogModule } from '../../shared/dialog/dialog.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MessageModule,
    MatProgressSpinnerModule,
    DialogModule
  ]
})
export class UserModule {
}
