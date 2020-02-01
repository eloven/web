import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { RegisterVm } from './models/view-models/register-vm.model';
import { UserService } from './user.service';

@Controller('user')
@ApiTags(User.modelName)
export class UserController {

  constructor(private readonly _userService: UserService) {}

  @Post('register')
  async register(@Body() vm: RegisterVm) {
    console.log('register');
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
    console.log(newUser);
    return newUser;
  }
}
