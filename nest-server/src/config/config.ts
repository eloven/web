import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const MYSQL_OPTHION: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin888',
  database: 'nest_server',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
