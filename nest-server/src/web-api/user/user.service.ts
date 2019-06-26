import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './user.interface';


@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {
  }

  async create(userData: UserInterface) {
    const res = await this.findByName(userData.name);
    if (res) {
      throw new HttpException('user is saved', HttpStatus.BAD_REQUEST);
    } else {
      userData.createdAt = new Date();
      const createdUser = new this.userModel(userData);
      return await createdUser.save();
    }
  }

  async findByName(name: string) {
    return await this.userModel.findOne({name});
  }

  async updateByName(userData: UserInterface) {
    return await this.userModel.findOneAndUpdate({name: userData.name}, userData);
  }
}
