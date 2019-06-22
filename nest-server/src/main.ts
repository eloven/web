import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Port } from './config/port';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Port.http);
}
bootstrap().then(() => {
  console.log(`http://127.0.0.1:${Port.http}`);
});
