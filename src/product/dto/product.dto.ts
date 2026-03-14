import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsNumber} from 'class-validator';


@ApiSchema({ name: 'Create' })
export class ProductCreateDto {

    @ApiProperty({ description: 'Product Name' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'Product Description' })
    // @IsOptional()
    @IsString()
    description: string;

    @ApiProperty({ description: 'Product Code' })
    @IsString()
    code: string;

    @ApiProperty({ description: 'Product Price' })
    @IsNumber()
    price: number;

    @ApiProperty({ description: 'Product Stock' })
    @IsNumber()
    stock: number;

    @ApiProperty({ description: 'Product SKU' })
    @IsString()
    sku: string;
    
    @ApiProperty({ description: 'Product Type' })
    @IsString()
    type: string;

    @ApiProperty({ description: 'Product Category' })
    @IsString()
    category: string;
}