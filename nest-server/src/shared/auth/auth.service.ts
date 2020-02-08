import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { sign, SignOptions } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/user.service';
import { ConfigEnum } from '../../config/config.enum';
import { JwtModel } from './jwt.model';
import { User } from '../../user/models/user.model';

@Injectable()
export class AuthService {
  private readonly jwtOptions: SignOptions;
  private readonly jwtKey: string;

  constructor(
    @Inject(forwardRef(() => UserService))
    readonly _userService: UserService,
    private readonly _configurationService: ConfigService
  ) {
    this.jwtOptions = { expiresIn: '12h' };
    this.jwtKey = _configurationService.get(ConfigEnum.JWT_KEY);
  }

  /**
   * 生成token
   * @param payload
   */
  async signPayload(payload: JwtModel): Promise<string> {
    return sign(payload, this.jwtKey, this.jwtOptions);
  }

  async validateUser(validatePayload: JwtModel): Promise<User> {
    return this._userService.findOne({ username: validatePayload.username.toLowerCase() });
  }
}
