import { Types } from 'mongoose';
import { InstanceType, ModelType, Typegoose } from 'typegoose';
import { Logger } from '@nestjs/common';

export abstract class BaseService<T extends Typegoose> {
  protected model: ModelType<T>;

  private get modelName() {
    return this.model.name;
  }

  private get viewModelName(): string {
    return `${this.model.modelName}Vm`;
  }

  async findAll(filter = {}): Promise<InstanceType<T>[]> {
    return this.model.find(filter).exec();
  }

  async findOne(filter = {}): Promise<InstanceType<T>>  {
    Logger.log('findOne');
    return this.model.findOne(filter).exec();
  }

  async findById(id: string): Promise<InstanceType<T>>  {
    return this.model.findById(this.toObjectId(id)).exec();
  }

  async create(item: InstanceType<T>): Promise<InstanceType<T>> {
    Logger.log('create');
    return this.model.create(item);
  }

  async delete(id: string): Promise<InstanceType<T>> {
    return this.model.findByIdAndRemove(this.toObjectId(id)).exec();
  }

  async update(id: string, item: InstanceType<T>): Promise<InstanceType<T>> {
    return this.model.findByIdAndUpdate(this.toObjectId(id), item, { new: true }).exec();
  }

  async clearCollection(filter = {}): Promise<{ ok?: number; n?: number; }> {
    return this.model.deleteMany(filter).exec();
  }

  private toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId(id);
  }
}
