import { HttpException, Injectable, HttpStatus, Logger, Inject, forwardRef } from '@nestjs/common';
import { BaseService } from '../shared/base.service';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RegisterVm } from './models/view-models/register-vm.model';
import { compareHashSign, hashSign } from '../utils/sign';
import { LoginVm } from './models/view-models/login-vm.model';
import { JwtModel } from '../shared/auth/jwt.model';
import { AuthService } from '../shared/auth/auth.service';

@Injectable()
export class UserService extends BaseService<User> {
  /**
   * BaseService
   * model <=> userModel
   * @param userModel
   * @param _authService
   */
  constructor(@InjectModel(User.modelName) private readonly userModel: ModelType<User>,
              @Inject(forwardRef(() => AuthService)) private readonly _authService: AuthService) {
    super();
    this.model = userModel;
  }

  async register(vm: RegisterVm) {
    const { username, password, nickname, sex } = vm;
    const newUser = User.createModel();
    newUser.username = username.trim().toLowerCase();
    newUser.nickname = nickname;
    newUser.sex = sex;
    newUser.password = hashSign(password);
    try {
      const result = await this.create(newUser);
      return result.toJSON() as User;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(vm: LoginVm) {
    const { username, password } = vm;
    const user = await this.findOne({ username });

    if (!user) {
      Logger.log('用户名不存在');
      throw new HttpException('用户名或密码错误', HttpStatus.NOT_FOUND);
    }

    const isMatch = compareHashSign(password, user.password);

    if (!isMatch) {
      Logger.log('密码不正确');
      throw new HttpException('用户名或密码错误', HttpStatus.BAD_REQUEST);
    }

    const jwtModel: JwtModel = {
      username: user.username,
      role: user.role,
      device: 'web'
    };

    const token = await this._authService.signPayload(jwtModel);

    return {
      token,
      user
    };
  }
}
