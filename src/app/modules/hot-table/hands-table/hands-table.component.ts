import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-hands-table',
    templateUrl: './hands-table.component.html',
    styleUrls: ['./hands-table.component.scss']
})
export class HandsTableComponent implements OnInit {
    dataset: any[];
    constructor() {
    }

    ngOnInit() {
        this.dataset = [
            {id: 1, name: 'Ted Right', address: 'Wall Street'},
            {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
            {id: 3, name: 'Joan Well', address: 'Broadway'},
            {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
            {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
            {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
            {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
            {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
        ];
    }

}
