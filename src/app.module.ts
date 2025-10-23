import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
