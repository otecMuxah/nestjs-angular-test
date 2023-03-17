import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, photos } from '@prisma/client';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}

  async photo(
    photosWhereUniqueInput: Prisma.photosWhereUniqueInput,
  ): Promise<photos | null> {
    return this.prisma.photos.findUnique({
      where: photosWhereUniqueInput,
    });
  }

  async photosByAlbumId(albumId: number): Promise<photos[] | null> {
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
  }): Promise<photos[]> {
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
