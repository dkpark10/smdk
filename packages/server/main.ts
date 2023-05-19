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
import * as express from 'express';

export const appRouter = router({
  chat: chatRouter,
});

export type AppRouter = typeof appRouter;

(async function run() {
  /**
   * @todo cors 설정 디테일하게
   */
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());

  app.use(cors());

  app.useWebSocketAdapter(new WsAdapter(app));

  app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }));

  await app.listen(8080, async() => {
    console.log(`Application is running on: 8080`);
  });
})();
