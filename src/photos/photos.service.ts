import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { Prisma } from '@prisma/client';
import { Photos } from '../generated/dto/photos/entities/photos.entity';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}

  async photo(
    photosWhereUniqueInput: Prisma.photosWhereUniqueInput,
  ): Promise<Photos | null> {
    return this.prisma.photos.findUnique({
      where: photosWhereUniqueInput,
    });
  }

  async photosByAlbumId(albumId: number): Promise<Photos[] | null> {
    return this.prisma.photos.findMany({
      where: { albumId: albumId },
    });
  }

  async photos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.photosWhereUniqueInput;
    where?: Prisma.photosWhereInput;
    orderBy?: Prisma.photosOrderByWithRelationInput;
  }): Promise<Photos[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.photos.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
