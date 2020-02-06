import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../shared/message/message.service';
import { DialogService } from '../../../shared/dialog/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private message: MessageService, private dialog: DialogService) {
  }

  ngOnInit() {
    this.loginForm= this.fb.group({
      username: ['', Validators.minLength(6)],
      password: ['', Validators.minLength(6)]
    })
  }

  doLogin() {
    if (this.loginForm.valid) {
      console.log( this.loginForm.value);
      this.dialog.open();
    } else {
      this.message.open({type: 'error', message: '用户名或密码错误'});
    }
  }

}
