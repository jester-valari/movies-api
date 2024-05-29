import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class SearchParamsDto {
    @IsOptional()
    @IsString()
    cast: string;

    @IsOptional()
    @IsString()
    language: string;

    @IsOptional()
    @Transform(({ value }) => {
        return Number(value);
      })
    @IsNumber()
    imdbRating:number;

    @IsOptional()
    @Transform(({ value }) => {
        return Number(value);
      })
    @IsNumber()
    viewerRating:number;
  
}
  