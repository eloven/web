/**
 * SocketService
 *
 * @author GuoBin on
 */
import * as ws from 'ws';

export class SocketService {

  private ws: ws.Server;
  private timer: any;

  constructor() {
    this.initWs();
    this.ws.on('connection', (socket) => {
        console.log('connection');
        socket.on('message', (coming) => {
          console.log(coming);
          this.publish(coming);
        });
        socket.on('close', (client) => {
          console.log('close');
          console.log(client);
        });

    });
  }

  publish(data: any) {
    this.ws.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
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
