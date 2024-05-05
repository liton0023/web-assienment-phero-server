import { Schema, model } from 'mongoose';
import { Breed, CowModel, ICow, categoty } from './cow.interface';

export const CowSchema = new Schema<ICow, CowModel>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      enum: [
        'Dhaka',
        'Chattogram',
        'Barishal',
        'Rajshahi',
        'Sylhet',
        'Comilla',
        'Rangpur',
        'Mymensingh',
      ],
      required: true,
    },
    breed: {
      type: String,
      enum: Breed,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      enum: ['for-sale', 'sold-out'],
      required: true,
    },
    category: {
      type: String,
      enum: categoty,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Cow = model<ICow, CowModel>('Cow', CowSchema);
