/**
 * 基础分页查询
 */
import { BaseModel } from './base.model';

export interface PageQuery {
  // 页容量
  pageSize: number
  // 当前页
  pageNum: number
  // 排序方式
  sortType?: number
  // 排序字段
  sortProp?: string
  // 其他字段
  [props: string]: any
}

/**
 * 多条件分页查询
 */
export abstract class QueryModel<T> implements PageQuery {
  pageNum = 1
  pageSize = 10
  sortProp = ''
  sortType = 1
}

/**
 * 实现
 */
export interface QueryFunc<T> {
  (model: QueryModel<T>): Promise<T[]>
}
