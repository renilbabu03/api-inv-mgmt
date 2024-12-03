import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from 'typeorm';
import { Product } from './Product';

@Entity()
@Unique(["name"])
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()

    name: string;

    @Column({ default: '' })
    description: string;

    @OneToMany(() => Product, (product) => product.category)

    products: Product[];
}
