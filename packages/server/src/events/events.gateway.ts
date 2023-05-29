import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { Logger } from '@nestjs/common';
import { createFakerChatData } from '../chat/chat.model';

/** @see {@link https://docs.nestjs.com/websockets/gateways} */
@WebSocketGateway(8081, { transports: ['websocket'] })
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Socket;
  logger = new Logger('chat gateway');

  /** @todo 초기화 이후에 실행 */
  afterInit() {}

  /** @todo 소켓 연결 후 실행 */
  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id} 소켓 연결되었습니다.`);
  }

  /** @todo  소켓 끊어지면 실행 */
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id} 소켓 연결 해제되었습니다.`);
  }

  @SubscribeMessage('chat')
  handleMessage(@ConnectedSocket() socket: Socket, @MessageBody() message: string) {
    socket.emit('chat', message);
    createFakerChatData(message);
  }
}
