import { LoginVm } from './login-vm.model';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterVm extends LoginVm {
  @ApiProperty({
    required: false,
    example: '王二狗'
  })
  nickname: string;

  @ApiProperty({
    required: false,
    example: 1
  })
  sex: number;
}
