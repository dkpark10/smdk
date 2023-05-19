import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import helmet from 'helmet';
import csurf from 'csurf';
import { router } from './trpc';
import { chatRouter } from './chat/chat.router';
import { createContext } from './trpc';
import * as trpcExpress from '@trpc/server/adapters/express';

export const appRouter = router({
  chat: chatRouter,
});

export type ChatRouter = typeof chatRouter;

(async function run() {
  /**
   * @todo cors 설정 디테일하게
   */
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());

  app.use(csurf());

  app.useWebSocketAdapter(new WsAdapter(app));

  app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }));

  await app.listen(8080);
  console.log(`Application is running on: ${await app.getUrl()}`);
})();
