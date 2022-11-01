import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { BookModule } from './modules/Books/book.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST}/${process.env.DATABASE}`,
    ),
    BookModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
