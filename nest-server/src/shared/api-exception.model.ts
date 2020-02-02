import { ApiProperty } from '@nestjs/swagger';

export class ApiException {
  @ApiProperty() statusCode?: number;
  @ApiProperty() message?: string;
  @ApiProperty() status?: string;
  @ApiProperty() error?: string;
  @ApiProperty() errors?: any;
  @ApiProperty() timestamp?: string;
  @ApiProperty() path?: string;
}
