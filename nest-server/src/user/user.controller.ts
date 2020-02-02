import { Body, Controller, Get, HttpException, HttpStatus, Logger, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { RegisterVm } from './models/view-models/register-vm.model';
import { UserService } from './user.service';
import { LoginVm } from './models/view-models/login-vm.model';

@Controller('user')
@ApiTags(User.modelName)
export class UserController {

  constructor(private readonly _userService: UserService) {}

  @Post('register')
  async register(@Body() vm: RegisterVm) {
    const { username, password } = vm;

    if (!username) {
      throw new HttpException('Username is required', HttpStatus.BAD_REQUEST);
    }

    if (!password) {
      throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
    }

    let exist;
    try {
      exist = await this._userService.findOne({ username });
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    if (exist) {
      throw new HttpException(`${username} exists`, HttpStatus.BAD_REQUEST);
    }

    const newUser = await this._userService.register(vm);
    Logger.log(`register(): ${newUser}`);
    return newUser;
  }

  @Post('login')
  async login(@Body() vm: LoginVm) {
    const { username, password } = vm;
    if (!username) {
      throw new HttpException('Username is required', HttpStatus.BAD_REQUEST);
    }

    if (!password) {
      throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
    }

    return this._userService.login(vm);
  }

  @Get()
  async pageQuery() {
    return this._userService.findAll();
  }
}
