import {Injectable} from '@angular/core';
import * as filebase from 'firebase/app';
import {Router} from '@angular/router';
import {LocalStorageService} from '../utils/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;
    constructor(private router: Router, private storage: LocalStorageService) {
    }

    /**
     * 邮箱注册
     * @param email 邮箱
     * @param password 密码
     */
    signUpUser(email: string, password: string) {
        filebase.auth().createUserWithEmailAndPassword(email, password).then(
            res => {
                if (String(res) === email) {
                    this.router.navigate(['home']).then();
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    }

    /**
     * 登录
     * @param email 邮箱
     * @param password 密码
     */
    signInUser(email: string, password: string) {
        filebase.auth().signInWithEmailAndPassword(email, password).then(
            res => {
                console.log(res);
                filebase.auth().currentUser.getIdToken().then((token: string) => {
                    this.token = token;
                    console.log(this.token);
                    this.storage.setStorage('token', this.token);
                });
                this.router.navigate(['home']).then(

                );
            }
        ).catch(err => {
            console.log(err);
        });
    }

    /**
     * 退出登录
     */
    logOut() {
        filebase.auth().signOut().then(
            this.token = null
        );
    }
    /**
     * 获取token
     */
    getToken() {
        filebase.auth().currentUser.getIdToken().then((token: string) => {
            this.token = token;
        });
        return this.token;
    }

    /**
     * 是否登录
     */
    isAuthenticated() {
        return this.token != null;
    }
}
