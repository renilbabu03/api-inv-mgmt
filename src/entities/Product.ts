import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    quantityInStock: number;

    @Column()
    brand: string;

    @Column()
    SKU: string;

    @Column()
    expirationDate: Date;

    @Column()
    imageURL: string;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
}