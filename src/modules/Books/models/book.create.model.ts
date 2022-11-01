import { IsString, IsArray, IsNumber } from 'class-validator';
export class BookCreateModel {
  @IsString()
  name: string;

  @IsString()
  author: string;

  @IsArray()
  categories: string[];

  @IsNumber()
  score: number;
}
