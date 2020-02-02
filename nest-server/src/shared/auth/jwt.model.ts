import { UserRole } from '../../user/models/user-role';

export interface JwtModel {
  username: string;
  role: UserRole;
  iat?: Date;
  device?: string;
}
