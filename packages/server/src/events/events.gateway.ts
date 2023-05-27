import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

import { Server } from 'ws';
import { createFakerChatData } from '../chat/chat.model';

@WebSocketGateway(8081)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(client: any, data: string) {
    createFakerChatData(data);
  }
}
