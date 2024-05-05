import { Model, Types } from 'mongoose';
import { ICow } from '../cow/cow.interface';

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IUser = {
  id: string;
  password: string;
  phoneNumber: string;
  role: 'seller' | 'buyer';
  name: UserName;
  address: string;
  budget?: number;
  income?: number;
  cow?: Types.ObjectId | ICow;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
