import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { BaseService } from '../shared/base.service';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RegisterVm } from './models/view-models/register-vm.model';

@Injectable()
export class UserService extends BaseService<User> {
  /**
   * BaseService
   * model <=> userModel
   * @param userModel
   */
  constructor(@InjectModel(User.modelName) private readonly userModel: ModelType<User>) {
    super();
    this.model = userModel;
  }

  async register(vm: RegisterVm) {
    const { username, password, nickname, sex } = vm;
    const newUser = User.createModel();
    newUser.username = username.trim().toLowerCase();
    newUser.nickname = nickname;
    newUser.sex = sex;
    newUser.password = password;
    try {
      const result = await this.create(newUser);
      return result.toJSON() as User;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
