/**
 * SocketService
 *
 * @author GuoBin on
 */
import * as ws from 'ws';
import json5 = require('json5');

export class SocketService {

  private ws: ws.Server;
  private timer: any;

  constructor() {
    this.initWs();
    this.ws.on('connection', (socket) => {
        this.publish({type: 'text', data: '初次连接上'});
        socket.on('message', (coming) => {
          this.handleComing(coming);
        });
        socket.on('close', (closeCode) => {
          console.log(closeCode);
        });

    });
  }

  /**
   * 推送消息
   * @param data
   */
  publish(data: any) {
    this.ws.clients.forEach(client => {
      if (client.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  }

  /**
   * 处理接收消息
   * @param coming
   */
  private handleComing(coming: any) {

  }

  private initWs() {
    try {
      this.ws = new ws.Server({
        port: 12011,
        perMessageDeflate: {
          zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3,
          },
          // Other options settable:
          clientNoContextTakeover: true, // Defaults to negotiated value.
          serverNoContextTakeover: true, // Defaults to negotiated value.
          serverMaxWindowBits: 10, // Defaults to negotiated value.
          // Below options specified as default values.
          concurrencyLimit: 10, // Limits zlib concurrency for perf.
          threshold: 1024, // Size (in bytes) below which messages
          // should not be compressed.
        },
      });
    } catch (e) {
      this.timer = setTimeout(() => {
        this.initWs();
      }, 5000);
    }
  }
}
