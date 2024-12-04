import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional() // Optional field
    description?: string;

    @IsNumber()
    price: number;

    @IsNumber()
    quantityInStock: number;

    @IsString()
    @IsNotEmpty()
    brand: string;



    @IsDate()
    expirationDate: Date;

    @IsString()
    imageURL: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}
