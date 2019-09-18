import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class UserFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
