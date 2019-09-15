import { ReflectMetadata } from '@nestjs/common';

export const User = (...args: string[]) => ReflectMetadata('user', args);
