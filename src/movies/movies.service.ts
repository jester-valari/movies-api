import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { SearchParamsDto } from './dto/search-params.dto';

@Injectable()
export class MoviesService {

  constructor(@InjectModel(Movie.name) private movieModal:Model<Movie>){}

  async create(createMovieDto: CreateMovieDto) {
    return this.movieModal.create({
      _id: new ObjectId(),
      ...createMovieDto
    });
  }

  async findAll({
    cast,
    language,
    imdbRating,
    viewerRating
  }:SearchParamsDto):Promise<Object> {

    const queries = [];
    // if((page>0 && limit>0)){
    //   return await this.movieModal.aggregate([
    //     { $skip: (page - 1) * limit },
    //     { $limit: limit },
    //   ]);
    // }

    if(cast){
      queries.push({$match:{"cast":cast}})
    }

    if(language){
      queries.push({$match:{"languages":language}})
    }

    if(imdbRating){
      queries.push({$match:{"imdb.rating":{$gte:Number(imdbRating)}}})
    }

    if(viewerRating){
      queries.push({$match:{"tomatoes.viewer.rating":{$gte:Number(viewerRating)}}})
    }

      return await this.movieModal.aggregate(queries);
    
    // return await this.movieModal.find({});
  }



  async findOne(id: string) {
    return await this.movieModal.findOne({_id:id});
  }



  async update(id: string, updateMovieDto: UpdateMovieDto) {
    return await this.movieModal.findOneAndUpdate({_id:id},updateMovieDto,{new:true})
  }



  async remove(id: string) {
    return await this.movieModal.findOneAndDelete({_id:id},{new:true})
  }
}
