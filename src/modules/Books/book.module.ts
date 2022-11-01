/* eslint-disable max-len */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Schema, CollectionName } from './schemas/book.schemas';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CollectionName, schema: Schema }]),
  ],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
