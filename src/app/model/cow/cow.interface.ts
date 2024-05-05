import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
export const Breed = [
  'Brahman',
  'Nellore',
  'Sahiwal',
  'Gir',
  'Indigenous',
  'Tharparkar',
  'Kankrej',
];
export const categoty = ['Dairy', 'Beef', 'Dual Purpose'];
export type ICow = {
  name: string;
  age: number;
  price: number;
  location: string;
  breed: string;
  weight: string;
  label: string;
  category: string;
  seller: Types.ObjectId | IUser;
};

export type CowModel = Model<ICow, Record<string, unknown>>;
