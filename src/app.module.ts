import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston.config';

@Module({
  imports: [UsersModule, AuthModule, WinstonModule.forRoot(winstonConfig)],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
