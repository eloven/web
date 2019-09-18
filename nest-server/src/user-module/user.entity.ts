import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../core/base-entity';
import {  IsEmail } from 'class-validator';

/**
 * 用户模型
 */
@Entity()
export class UserEntity extends BaseEntity {

  @Column({
    length: 100,
  })
  nickName: string;

  @Column({
    length: 100,
  })
  realName: string;

  @Column({
    length: 100,
  })
  username: string;

  @Column()
  password: string;

  @Column()
  sex: number;

  @Column()
  identityCard: string;

  @Column()
  age: number;

  @Column()
  phone: string;

  @Column()
  @IsEmail()
  email: string;

}
