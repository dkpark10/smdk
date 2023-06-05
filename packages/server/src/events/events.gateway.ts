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
import { createFakerChatData } from '@/chat/chat.model';
import { CHAT_SOCKET_HANDLER, CHAT_SOCKET_JOIN_ROOM, TEMP_ROOM_NAME } from '@common/index';

/** @see {@link https://docs.nestjs.com/websockets/gateways} */
@WebSocketGateway({
  cors: {
    /** @todo 환경설정 */
    origin: ['http://localhost:3000'],
  },
})
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Socket;

  logger = new Logger(EventsGateway.name);

  /** @description 초기화 이후에 실행 */
  afterInit() {
    this.logger.log('after init');
  }

  /** @description 소켓 연결 후 실행 */
  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id} 소켓 연결되었습니다.`);
  }

  /** @description  소켓 끊어지면 실행 */
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id} 소켓 연결 해제되었습니다.`);
    this.logger.error;
  }

  @SubscribeMessage(CHAT_SOCKET_JOIN_ROOM)
  joinRoom(@ConnectedSocket() socket: Socket) {
    socket.join(TEMP_ROOM_NAME);
  }

  @SubscribeMessage(CHAT_SOCKET_HANDLER)
  handleMessage(@ConnectedSocket() socket: Socket, @MessageBody() message: string) {
    const newChatData = {
      content: message,
      isSender: true,
      fullDate: 'May 15, 2023 10:38 AM',
      milliSeconds: '1684113481000',
    };

    socket.to(TEMP_ROOM_NAME).emit(CHAT_SOCKET_HANDLER, newChatData);
    createFakerChatData(message);
    return newChatData;
  }
}

