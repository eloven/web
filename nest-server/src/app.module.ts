import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { ConfigEnum } from './config/config.enum';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MongooseModule.forRoot(configuration().MONGO_URI, {
      uri: configuration().MONGO_URI,
      retryDelay: 500,
      retryAttempts: 3,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }),
    SharedModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  static host: string;
  static port: string;
  static isDev: boolean;

  constructor(private readonly configService: ConfigService) {
    AppModule.host = this.configService.get(ConfigEnum.HOST);
    AppModule.port = this.configService.get(ConfigEnum.PORT);
    AppModule.isDev = this.configService.get(ConfigEnum.ENV) === 'development';
  }
}
