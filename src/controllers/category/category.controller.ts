import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/entities/Category';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Categories')
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
    create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.create(createCategoryDto);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateCategoryDto: UpdateCategoryDto,
    ): Promise<Category> {
        return this.categoryService.update(id, updateCategoryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.categoryService.remove(id);
    }
}
