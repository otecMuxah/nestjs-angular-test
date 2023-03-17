import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { PrismaService } from '../core/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UserService, PrismaService],
})
export class UsersModule {}
