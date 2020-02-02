import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(error: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    if (error.getStatus() === HttpStatus.UNAUTHORIZED) {
      if (typeof error.response !== 'string') {
        error.response['message'] =
          error.response.message || '无访问权限';
      }
    }

    const respondTo: any = {
      statusCode: error.getStatus(),
      error: error.response.name || error.response.error || error.name,
      message: error.response.message || error.response || error.message,
      errors: error.response.errors || null,
      timestamp: new Date().toISOString(),
      path: req ? req.url : null
    };

    res.status(error.getStatus()).json(respondTo);
  }
}
