import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

export interface IBook extends Document {
  /**
   * unique ID for document
   */
  _id: ObjectId;

  name: string;

  author: string;

  categories: string[];

  createAt: Date;

  updatedAt: Date;
}
export type BookModel = IBook;
