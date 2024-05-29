import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IAwards,IImdb,ITomatoes } from '../interfaces/movie.interface';

@Schema({
    timestamps:true,
    collection:'movies'
})
export class Movie {

    @Prop()
    plot:string

    @Prop([String])
    genres:string[]

    @Prop()
    runtime:number

    @Prop([String])
    cast:string[]

    @Prop()
    title:string

    @Prop()
    fullplot:string

    @Prop([String])
    languages:string[]

    @Prop()
    released:string

    @Prop({type:[String]})
    directors:string[]

    @Prop({type:[String]})
    writers:string[]

    @Prop({type:{}})
    awards:IAwards

    @Prop()
    lastUpdated:string

    @Prop()
    year:number
    
    @Prop({type:{}})
    imdb:IImdb

    @Prop({type:[String]})
    countries:string[]

    @Prop()
    type:string

    @Prop({type:{}})
    tomatoes:ITomatoes
}

export const MoviesSchema = SchemaFactory.createForClass(Movie)