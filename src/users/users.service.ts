import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '../../generated/prisma';

    
@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // async createUser(data: { name: string; email: string }) {
  //   return this.prisma.user.create({data});
  // }
        
        
        
}