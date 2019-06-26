import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { UserInterface } from './user.interface';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('register')
  async register(@Body() body: UserInterface) {
    const { name, age } = body;
    if (!name) {
      throw new HttpException('用户名必须填写', HttpStatus.BAD_REQUEST);
    }

    if (!age) {
      throw new HttpException('年龄必须填写', HttpStatus.BAD_REQUEST);
    }

    return this.userService.create(body);
  }

  @Post('login')
  async login(@Body() body: UserDto) {

  }

  @Put(':name')
  async update(@Body() body: UserInterface) {
    const { name, age } = body;
    if (!name) {
      throw new HttpException('用户名必须填写', HttpStatus.BAD_REQUEST);
    }

    if (!age) {
      throw new HttpException('年龄必须填写', HttpStatus.BAD_REQUEST);
    }
    return this.userService.updateByName(body);
  }

  @Get('all')
  async getUserList(@Res() response: Response) {
    response.status(HttpStatus.OK).json({ users: [] });
  }

  @Get(':name')
  async findByName(@Param('name') name: string) {
    return this.userService.findByName(name);
  }
}
