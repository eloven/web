import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';

/**
 * 通用数据库模型
 */
@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'date',
  })
  @IsDate()
  createdAt: string;

  @Column({
    default: new Date(),
  })
  updateAt: string;
}
