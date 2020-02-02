import { BaseModelVm } from '../../../shared/base.model';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../user-role';

export class UserVm extends BaseModelVm {
  @ApiProperty()
  username: string;

  @ApiProperty()
  nickname?: string;

  @ApiProperty()
  sex?: number;

  @ApiProperty({ enum: UserRole })
  role?: UserRole;
}
