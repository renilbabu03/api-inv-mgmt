import { IsString, IsOptional } from 'class-validator';

export class UpdateCategoryDto {
    @IsString()
    @IsOptional() // Optional field
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;
}
