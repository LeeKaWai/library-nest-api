import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
// services
import { BookService } from './book.service';

// models
import { BookCreateModel, BookUpdateModel, BookSearchModel } from './models';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  public async create(@Body() body: BookCreateModel) {
    return this.bookService.create(body);
  }

  @Put(':_id')
  public async update(@Param() param, @Body() body: BookUpdateModel) {
    return this.bookService.update(param._id, body);
  }

  @Get()
  public async find(@Query() query: BookSearchModel) {
    return this.bookService.find(query);
  }

  @Get(':_id')
  public async findById(@Param() param) {
    return this.bookService.findById(param._id);
  }

  @Delete(':_id')
  public async deleteById(@Param() param) {
    return this.bookService.delete(param._id);
  }
}
