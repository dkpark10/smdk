import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

import { Server } from 'ws';
import { chatRouter } from 'src/chat/chat.router';

@WebSocketGateway(8081)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(client: any, data: any): string {
    console.log("websocket", data);
    // chatRouter.createChatData(data);
    return 'events socket';
  }
}
