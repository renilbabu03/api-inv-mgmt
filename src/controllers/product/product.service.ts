import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/Category';
import { Product } from 'src/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find({ relations: ['category'] });
    }

    async findOne(id: number): Promise<Product> {
        return this.productRepository.findOne({
            where: { id },
            relations: ['category'],
        });
    }

    async create(productData: Partial<Product>): Promise<Product> {
        const category = this.productRepository.create(productData);
        return this.productRepository.save(category);
    }

    async update(id: number, productData: Partial<Product>): Promise<Product> {
        await this.productRepository.update(id, productData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }
}
