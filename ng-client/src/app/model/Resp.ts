import { ResponseCode } from '../config/ResponseCode';

export class Resp<T> {
  code: ResponseCode;
  data: T | object;
  message: string;
}
