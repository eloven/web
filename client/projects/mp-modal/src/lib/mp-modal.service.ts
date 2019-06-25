import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MpModalService {

  private data = new Map<number, any>();
  private id: number = 0;
  constructor() { }

  public open(template: HTMLElement) {
    this.data.set(this.id + 1, template);
    document.body.appendChild(template);
    return this.id + 1;
  }

  public close(id: number) {
    document.body.removeChild(this.data.get(id));
    this.data.delete(id);
  }
}
