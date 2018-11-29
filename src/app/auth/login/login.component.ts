import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    constructor(private auth: AuthService) {
    }

    ngOnInit() {
    }

    /**
     * 注册
     */
    onSignUp() {
        if (this.email && this.password) {
            this.auth.signUpUser(this.email, this.password);
        }
    }

    /**
     * 登录
     */
    onSignIn() {
        if (this.email && this.password) {
            this.auth.signInUser(this.email, this.password);
        }
    }
}
