import {Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(): string {
        return "All Movies";
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string): string {
        return `One movie whith id ${movieId}`
    }

    @Post()
    create(): string {
        return "Create New Movie";
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string): string {
        return `Delete ${movieId} Movie`;
    }

    @Patch("/:id")
    update(@Param('id') movieId: string): string {
        return `Update Movie ${movieId}`;
    }
}
