import { Schema as MongooseSchema, SchemaTypes } from 'mongoose';

export const CollectionName = 'Book';
export const Schema = new MongooseSchema(
  {
    // 书名
    name: { type: SchemaTypes.String, required: true },
    // 作者
    author: { type: SchemaTypes.String, required: true },
    // 分类
    categories: [{ type: SchemaTypes.String, required: true }],
    // 评分
    score: { type: SchemaTypes.Number, required: true },
  },
  {
    collection: CollectionName,
    timestamps: true,
  },
);
