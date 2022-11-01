import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { BookCreateModel, BookUpdateModel, BookSearchModel } from './models';
import { BookModel } from './interfaces';
import { Model } from 'mongoose';
import { BadRequestException } from 'src/core';

@Injectable({ scope: Scope.REQUEST })
export class BookService {
  constructor(
    @InjectModel('Book')
    private readonly bookRepository: Model<BookModel>,
  ) {}

  /**
   * 查询条件处理
   * @param searchModel
   * @returns
   */
  public _castQuery(searchModel: BookSearchModel) {
    const query: any = [];
    const { name, categories } = searchModel;

    if (name) {
      const qReg = new RegExp(name || name, 'i');
      query.push({
        $or: [
          {
            name: qReg,
          },
        ],
      });
    }

    if (categories?.length) {
      query.push({
        categories: { $in: categories },
      });
    }

    return query.length > 0 ? { $and: query } : {};
  }

  /**
   * 添加图书
   * @param body object book create model
   * @returns book
   */
  public async create(body: BookCreateModel) {
    const _book = await this.bookRepository.findOne({ name: body.name });
    // 先进行检查是否存在同名书籍 (假设书名是唯一值)
    if (_book) {
      throw new BadRequestException({
        status: 500,
        message: '已存在同名的书本。',
      });
    }
    return this.bookRepository.create(body);
  }

  /**
   * 查询列表
   * @param query Object 搜索条件
   * @returns
   */
  public async find(query: BookSearchModel) {
    const { sort, sortBy } = query;
    const _query = this._castQuery(query);
    const _sort = {};
    _sort[sort] = sortBy;

    const result = await this.bookRepository.find(_query).sort(_sort);

    return result;
  }

  /**
   * 根据 _id 查询
   * @param _id string 书本 id
   * @returns
   */
  public async findById(_id) {
    const result = await this.bookRepository.findById(_id);
    return result;
  }

  /**
   * 根据 _id 更新
   * @param _id  string  书本 id
   * @param newBody 需要更新的字段
   * @returns
   */
  public async update(_id, newBody: BookUpdateModel) {
    return this.bookRepository.findByIdAndUpdate(_id, newBody, { new: true });
  }

  /**
   * 删除数据
   * @param _id string 书本 id
   * @returns
   */
  public async delete(_id) {
    return this.bookRepository.findByIdAndDelete(_id);
  }
}
