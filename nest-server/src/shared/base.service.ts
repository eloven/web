import { Types } from 'mongoose';
import { InstanceType, ModelType, Typegoose } from 'typegoose';
import { Logger } from '@nestjs/common';
import { formatPageQuery, PageQuery, PageResponse } from './base.filter';

export abstract class BaseService<T extends Typegoose> {
  protected model: ModelType<T>;

  private get modelName() {
    return this.model.name;
  }

  private get viewModelName(): string {
    return `${this.model.modelName}Vm`;
  }

  async findAll(filter = {}, pageQuery: PageQuery = {pageNum: 1, pageSize: 10}): Promise<PageResponse<T>> {
    pageQuery = formatPageQuery(pageQuery);
    const total: number = await this.model.countDocuments(filter);
    const list: InstanceType<T>[] = await this.model.find(filter)
                                          .sort({})
                                          .limit(pageQuery.pageSize)
                                          .skip(pageQuery.pageSize * (pageQuery.pageNum - 1))
                                          .exec();

    return {
      list,
      total
    };
  }

  async findOne(filter = {}): Promise<InstanceType<T>> {
    Logger.log('findOne');
    return this.model.findOne(filter).exec();
  }

  async findById(id: string): Promise<InstanceType<T>> {
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
