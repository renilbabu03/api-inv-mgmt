import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from 'src/app.service';
import { Product } from 'src/entities/Product';
import { CreateCategoryDto } from '../category/dtos/create-category.dto';
import { UpdateCategoryDto } from '../category/dtos/update-category.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/product-create.dto';

@ApiTags('Products')
@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) { }


  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Product> {
    return this.productService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productService.remove(id);
  }


}
