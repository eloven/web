/**
 * logger.service
 *
 * @author GuoBin on
 */
import { LoggerService } from '@nestjs/common';

export class LogService implements LoggerService {
  debug(message: any, context?: string): any {
  }

  error(message: any, trace?: string, context?: string): any {
  }

  log(message: any, context?: string): any {
  }

  verbose(message: any, context?: string): any {
  }

  warn(message: any, context?: string): any {
  }
}
