import { Injectable } from '@angular/core'

let randomTime: number

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  constructor() {
    if (!randomTime) {
      randomTime = new Date().getTime()
    }
  }

  public getUUID(p: any) {
    if (p) {
    }
  }
}
