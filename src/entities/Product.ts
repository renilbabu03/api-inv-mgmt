import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './Category';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    price: number;

    @Column()
    quantityInStock: number;

    @Column({ nullable: true })
    brand: string;

    @Column({ nullable: true })
    SKU: string;

    @Column({ nullable: true })
    expirationDate: Date;

    @Column({ nullable: true })
    imageURL: string;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @Column()
    categoryId: number;
}