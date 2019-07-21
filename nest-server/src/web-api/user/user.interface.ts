/**
 * user.interface
 *
 * @author GuoBin on
 */
import { Mongos } from 'mongodb';

export interface UserInterface extends Mongos {
  name: string;
  age: number;
  email?: string;
  sex?: string;
  createdAt?: Date;
  updateAt: Date;
}
