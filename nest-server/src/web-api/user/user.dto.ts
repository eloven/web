/**
 * user.dto
 *
 * @author GuoBin on
 */

import { IsEmail, IsNotEmpty } from 'class-validator';


export class UserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;

  @IsEmail()
  email: string;
}
