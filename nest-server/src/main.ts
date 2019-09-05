import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Port } from './config/port';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';
import { join } from 'path';
import { startWebSocket } from './web-socket/start';

async function bootstrap() {
  const app: any = await NestFactory.create(AppModule, {
    cors: true,
  });
  // 通过适当地设置 HTTP 头，Helmet 可以帮助保护您的应用免受一些众所周知的 Web 漏洞的影响。
  app.use(helmet());
  // 跨站点请求伪造（称为 CSRF 或 XSRF）
  // app.use(csurf());
  // 压缩
  app.use(compression());
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await startWebSocket();
  await app.listen(Port.http);
}
bootstrap().then(() => {
  console.log(`http://127.0.0.1:${Port.http}`);
});
