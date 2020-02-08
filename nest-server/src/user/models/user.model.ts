import { BaseModel, schemaOptions } from '../../shared/base.model';
import { InstanceType, ModelType, prop } from 'typegoose';
import { UserRole } from './user-role';

export class User extends BaseModel<User> {
  @prop({
    required: [true, '用户名不能为空'],
    unique: true,
    minlength: [6, '用户名至少为6位']
  })
  username: string;

  @prop({
    required: [true, '密码不能为空'],
    minlength: [6, '密码至少为6位']
  })
  password: string;

  @prop()
  nickname: string;

  @prop({
    required: false
  })
  sex: number;

  @prop()
  role: UserRole;

  static get model(): ModelType<User> {
    return new User().getModelForClass(User, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(): InstanceType<User> {
    return new this.model();
  }
}
