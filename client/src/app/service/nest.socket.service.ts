/**
 * nest.socket.service
 *
 * @author GuoBin on
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NestSocketService {
  private ws: WebSocket;
  constructor() {
    this.ws = new WebSocket('ws://127.0.0.1:12011');
    this.bindEvents();
  }

  private bindEvents() {
    this.ws.onopen = () => {
      console.log('open');
      this.ws.send('angular');
    };
  }

  send(data: string) {
    this.ws.send(data);
  }

  close() {
    this.ws.close();
  }
}
