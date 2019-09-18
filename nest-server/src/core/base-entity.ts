import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';

/**
 * 通用数据库模型
 */
@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDate()
  createdAt: string;

  @Column()
  @IsDate()
  updateAt: string;
}
