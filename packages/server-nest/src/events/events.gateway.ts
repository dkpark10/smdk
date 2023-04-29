import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'ws';

@WebSocketGateway(8081)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(client: any, data: any): string {
    console.log(data);
    return 'events socket';
  }
}
