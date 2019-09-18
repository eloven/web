import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user-module/user.controller';
import { UserGateway } from './user-module/user.gateway';
import { UserModule } from './user-module/user.module';
import { MYSQL_OPTHION } from './config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(MYSQL_OPTHION),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserGateway],
})
export class AppModule {}
