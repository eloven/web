/**
 * WsAdapter
 *
 * @author GuoBin on
 */
import { INestApplicationContext,  WebSocketAdapter, WsMessageHandler } from '@nestjs/common';
import * as ws from 'ws';
import { Observable } from 'rxjs';

export class WsAdapter implements WebSocketAdapter {
  private clients = new Map<string, any>();
  constructor(private readonly app: INestApplicationContext) {}

  bindClientConnect(server: any, callback: () => void): any {
    console.log(server);
    server.on('connection', callback);
  }

  bindClientDisconnect(client: any, callback: () => void): any {

  }

  bindMessageHandlers(client: any, handlers: WsMessageHandler[], transform: (data: any) => Observable<any>): any {
  }

  close(server: any): any {
    server.close();
  }

  create(port: number, options?: any): any {
    console.warn('WebSocketAdapter.create');
    return new ws.Server({ port, ...options });
  }

}
