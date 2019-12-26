import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const MYSQL_OPTIONS: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin888',
  database: 'nest_server',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  synchronize: true
}
