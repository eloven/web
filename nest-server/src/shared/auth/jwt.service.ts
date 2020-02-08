import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { JwtModel } from './jwt.model';
import { AuthService } from './auth.service';
import configuration from '../../config/configuration';

@Injectable()
export class JwtService extends PassportStrategy(Strategy) {
  constructor(private readonly _authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configuration().JWT_KEY
    });
  }

  async validate(payload: JwtModel, done: VerifiedCallback) {
    const user = await this._authService.validateUser(payload);

    if (!user) {
      return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
    }

    return done(null, user, payload.iat);
  }
}
