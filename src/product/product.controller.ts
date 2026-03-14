import { Controller, Inject, Get, Post, UseGuards, HttpCode, HttpStatus, Body , Query} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ProductService } from './product.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ProductCreateDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService, @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}
    
    @UseGuards(AuthGuard)
    @Get()
    findAll(){
        this.logger.info('Starting ProductController find all')
        return this.productService.findAllProducts()
    }
    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Query('id') id: number){
        this.logger.info('Starting UsersController find By ID')
        return this.productService.findById(id)
    }
    
    // @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('create')
    createUser(@Body() data: ProductCreateDto) {
        this.logger.info('Starting UsersController Create User')
        return this.productService.createProduct(data);
    }

}
