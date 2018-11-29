import {Component, OnInit} from '@angular/core';
import {DataSaveService} from '../../service/data-save.service';

@Component({
    selector: 'app-file-base',
    templateUrl: './file-base.component.html',
    styleUrls: ['./file-base.component.scss']
})
export class FileBaseComponent implements OnInit {
    mock = [
        {email: 'jack', password: '22'},
        {email: 'tom', password: '18'},
    ];

    constructor(private filebase: DataSaveService) {
    }

    ngOnInit() {
    }

    saveData() {
        this.filebase.storeService(this.mock).subscribe(res => {
            console.log(res);
        }, err => console.log(err));
    }

    readData() {
        this.filebase.getData().subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
