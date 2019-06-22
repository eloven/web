import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();

  constructor() {
  }
  ngOnInit() {
  }
  openDialog(name: string) {
    console.log(name);
  }
  doSearch() {
    const el = document.getElementById('search-input') as HTMLInputElement;
    console.log(el.value);
  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
