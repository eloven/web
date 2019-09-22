import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: UserEntity) {
    console.log(user);
    return 'ok';
  }

  @Get()
  findOne() {
    return 'user';
  }
}
