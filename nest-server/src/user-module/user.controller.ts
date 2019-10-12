import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: UserEntity) {
    console.log(user);
    return this.userService.createUser(user);
  }

  @Get()
  findList() {
    return 'users: list';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `user: one ${id}`;
  }
}
