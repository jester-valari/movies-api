import { Controller, Get, Post, Body, Patch, Param, Delete,Query, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { SearchParamsDto } from './dto/search-params.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    return await this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll(
    // @Query('page', ParseIntPipe) page: number = null,
    // @Query('limit', ParseIntPipe) limit: number = null,
    @Query() searchParams: SearchParamsDto 

  ) {
    const response = await this.moviesService.findAll(searchParams);

    return response
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.moviesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return await this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.moviesService.remove(id);
  }
}
