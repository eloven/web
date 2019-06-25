/**
 * start
 *
 * @author GuoBin on
 */
import { SocketService } from './socket.service';

export const sockets = new Map();

export async function startWebSocket() {
  const ws = new SocketService();
  sockets.set('name', ws);
  console.log('ws://127.0.0.1:12011');
}
