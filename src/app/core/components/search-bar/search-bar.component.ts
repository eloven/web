import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Output()
    openSide = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    openSideMenu() {
        this.openSide.emit();
    }

    openGithub() {
        window.open('https://github.com/guobin211/material-start');
    }
}
