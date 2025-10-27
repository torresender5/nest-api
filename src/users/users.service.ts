import { Logger, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Users } from './interface/user.interface';
import { PrismaService } from 'src/prisma/prisma.service';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { User, Prisma } from '../generated/prisma';

    
@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async users(params: {
    skip?: number;
    take?: number;
    // cursor?: Prisma.UserWhereUniqueInput;
    // where?: Prisma.UserWhereInput;
    // orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Users[]> {
    const { skip, take} = params;
    return this.prisma.user.findMany({
      skip,
      take,
      // cursor,
      // where,
      // orderBy,
    });
  }

  async createUser(data: { name: string; email: string, password:string }) {
    try{
      return this.prisma.user.create({data});
    } catch (error) {
      // ERROR LOG
    }
  }
        
  async findByEmail(email: string): Promise<Users | undefined | null> {
    return this.prisma.user.findUnique({
      where: { 
        email: email
      }
    })
  }
        
        
}