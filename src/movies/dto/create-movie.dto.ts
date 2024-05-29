import { IAwards, IImdb, ITomatoes } from "../interfaces/movie.interface"
import {
  IsArray,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsObject
} from 'class-validator';
import { Type } from "class-transformer";

export class CreateMovieDto   {
    @IsString()
    plot: string

    @IsArray()
    genres: [string]

    @IsNumber()
    runtime: number

    @IsArray()
    cast:[string]

    @IsString()
    title: string

    @IsString()
    fullplot: string

    @IsArray()
    languages: [string]

    @IsString()
    released: string

    @IsArray()
    directors: [string]

    @IsArray()
    writers: [string]

    @IsObject()
    awards: IAwards

    @IsString()
    lastupdated: string

    @IsNumber()
    year: number

    @IsObject()
    imdb: IImdb


    @IsArray()
    countries: [string]


    @IsString()
    type: string

    @IsObject()
    tomatoes:ITomatoes
  }
