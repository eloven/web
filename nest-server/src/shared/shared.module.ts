import { Global, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { JwtService } from './auth/jwt.service';

@Global()
@Module({
  providers: [ConfigService, AuthService, JwtService],
  exports: [ConfigService, AuthService],
  imports: [UserModule]
})
export class SharedModule {}
