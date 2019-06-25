import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Port } from './config/port';
import { LogService } from './log.service';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';
import { WsAdapter } from './web-socket/WsAdapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LogService(),
    cors: true
  });
  // 通过适当地设置 HTTP 头，Helmet 可以帮助保护您的应用免受一些众所周知的 Web 漏洞的影响。
  app.use(helmet());
  // 跨站点请求伪造（称为 CSRF 或 XSRF）
  // app.use(csurf());
  // 压缩
  app.use(compression());
  app.useWebSocketAdapter(new WsAdapter(app).create(12011));
  await app.listen(Port.http);
}
bootstrap().then(() => {
  console.log(`http://127.0.0.1:${Port.http}`);
});
