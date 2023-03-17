import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { PrismaService } from '../core/prisma.service';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService, PrismaService],
})
export class PhotosModule {}
