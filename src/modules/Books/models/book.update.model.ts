import { IsString, IsArray, IsOptional, IsNumber } from 'class-validator';
export class BookUpdateModel {
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
  @IsNumber()
  score?: number;
}
