import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/entities/Category';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Category> {
        return this.categoryService.findOne(id);
    }

    @Post()
    create(@Body() categoryData: Partial<Category>): Promise<Category> {
        return this.categoryService.create(categoryData);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() categoryData: Partial<Category>,
    ): Promise<Category> {
        return this.categoryService.update(id, categoryData);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.categoryService.remove(id);
    }
}
