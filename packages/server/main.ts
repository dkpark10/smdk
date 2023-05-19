import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
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

(async function run() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  /**@todo 환경변수에 따른 도메인 설정 */
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  app.useWebSocketAdapter(new WsAdapter(app));

  app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }));

  await app.listen(8080, async() => {
    console.log(`Application is running on: 8080`);
  });
})();
