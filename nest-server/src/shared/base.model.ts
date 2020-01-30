import { SchemaOptions } from 'mongoose';
import { prop, Typegoose } from 'typegoose';
import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseModel<T> extends Typegoose {
  @prop()
  @ApiProperty({ type: String, format: 'date-time' })
  createdAt?: Date;

  @prop()
  @ApiProperty({ type: String, format: 'date-time' })
  updatedAt?: Date;

  @ApiProperty()
  id: string;
}

export class BaseModelVm {
  @ApiProperty({ type: String, format: 'date-time' })
  createdAt?: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  updatedAt?: Date;

  @ApiProperty()
  id: string;
}

export const schemaOptions: SchemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true,
    getters: true
  }
};
