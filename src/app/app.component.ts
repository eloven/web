import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isOnline: boolean;

    constructor() {
        this.isOnline = navigator.onLine;
    }

    ngOnInit() {
    }
}
