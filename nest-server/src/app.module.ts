import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './module/user/user.controller';
import { UserGateway } from './module/user/user.gateway';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserGateway],
})
export class AppModule {}
