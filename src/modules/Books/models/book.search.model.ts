import { IsString, IsArray, IsOptional, IsInt } from 'class-validator';
export class BookSearchModel {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsArray()
  categories?: string[];

  @IsOptional()
  @IsString()
  sort?: string = 'createdAt';

  @IsOptional()
  @IsInt()
  sortBy?: number = -1;
}
