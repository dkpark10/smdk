import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { WebSocketServer } from 'ws';
import { NestFactory } from '@nestjs/core';
// import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './src/app.module';
import helmet from 'helmet';
// import csurf from 'csurf';
import * as cors from 'cors';
import { router } from './trpc';
import { chatRouter } from './src/chat/chat.router';
import { createContext } from './trpc';
import * as trpcExpress from '@trpc/server/adapters/express';

export const appRouter = router({
  chat: chatRouter,
});

export type AppRouter = typeof appRouter;

const serverPort = 8080;
const socketServerPort = 8081;

(async function run() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  /**@todo 환경변수에 따른 도메인 설정 */
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  // app.useWebSocketAdapter(new WsAdapter(app));

  const wss = new WebSocketServer({
    port: socketServerPort,
  });

  const handler = applyWSSHandler({ wss, router: appRouter, createContext });
  wss.on('connection', (ws) => {
    console.log(`➕➕ Connection (${wss.clients.size})`);
    ws.once('close', () => {
      console.log(`➖➖ Connection (${wss.clients.size})`);
    });
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM');
    handler.broadcastReconnectNotification();
    wss.close();
  });
  
  app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }));

  await app.listen(serverPort, async() => {
    console.log(`Application is running on: ${serverPort}`);
  });
})();
