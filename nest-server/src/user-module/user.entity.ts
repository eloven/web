import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../core/base-entity';
import { IsEmail } from 'class-validator';

/**
 * 用户模型
 */
@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    name: 'username',
    type: 'char',
    length: 100,
  })
  username: string;

  @Column({
    length: 100,
  })
  password: string;

  @Column({
    length: 100,
    nullable: true,
  })
  nickName: string;

  @Column({
    length: 100,
    nullable: true,
  })
  realName: string;

  @Column({
    nullable: true,
  })
  sex: number;

  @Column({
    nullable: true,
  })
  identityCard: string;

  @Column({
    nullable: true,
  })
  age: number;

  @Column({
    nullable: true,
  })
  phone: string;

  @Column({
    nullable: true,
  })
  @IsEmail()
  email: string;
}
