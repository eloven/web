import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  private readonly userRepo: Repository<UserEntity>;

  constructor() {
    this.userRepo = getRepository(UserEntity);
  }

  createUser(user: UserEntity) {
    return this.userRepo.save(user);
  }
}
