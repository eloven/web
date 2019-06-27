/**
 * user.schema
 *
 * @author GuoBin on
 */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: String,
  age: Number,
  sex: String,
  createdAt: { type: Date },
  updateAt: { type: Date, default: Date.now() },
});
