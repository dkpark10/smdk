import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import helmet from 'helmet';
import csurf from 'csurf';

(async function run() {
  /**
   * @todo cors 설정 디테일하게
   */
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.use(csurf());
  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(8080);
  console.log(`Application is running on: ${await app.getUrl()}`);
})();
