import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private default = [{ name: 'jack', age: 22 }, { name: 'tom', age: 18 }];

  constructor() {
  }

  async userList() {
    return this.default;
  }
}
