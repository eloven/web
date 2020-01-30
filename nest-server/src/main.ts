import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostDomain = AppModule.isDev ? `${AppModule.host}:${AppModule.port}` : AppModule.host;
  const options = new DocumentBuilder()
    .setTitle('Material-Pro')
    .setDescription('API docs')
    .setVersion('1.0')
    .addTag('NestJs')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(AppModule.port);
}
bootstrap().then(_ => console.log(`http://localhost:${AppModule.port}`));
