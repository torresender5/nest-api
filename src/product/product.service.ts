import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product, CreateProduct } from './interface/Product.interface';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class ProductService {

    constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger, private productPrisma: PrismaService) {}
    
    async findAllProducts() {
        this.logger.info('Starting ProductService function')
        return this.productPrisma.product.findMany();
    }

    async findById(id: number){
      try {
        return this.productPrisma.product.findUnique({
          where: { 
            id: id
          }
        })
      } catch (error) {
        // ERROR LOG
      }
    }

    async createProduct(data: CreateProduct) {
    try{
      return this.productPrisma.product.create({data});
    } catch (error) {
      // ERROR LOG
    }
  }
}
