import {Component, OnInit} from '@angular/core';
import * as filebase from 'firebase/app';
import 'firebase/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isOnline: boolean;
    config = {
        apiKey: 'AIzaSyBhuGi9AyhwbjfPaJcCpMQWTTvqWN33tl4',
        authDomain: 'fileapp-758ce.firebaseapp.com',
        databaseURL: 'https://fileapp-758ce.firebaseio.com',
        projectId: 'fileapp-758ce',
        storageBucket: 'fileapp-758ce.appspot.com',
        messagingSenderId: '966641192000'
    };
    constructor() {
        this.isOnline = navigator.onLine;
    }

    ngOnInit() {
        filebase.initializeApp(this.config);
    }
}
