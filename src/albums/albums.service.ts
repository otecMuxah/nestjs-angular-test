import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { Prisma } from '@prisma/client';
import { Albums } from '../generated/dto/albums/entities/albums.entity';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaService) {}

  async album(
    userWhereUniqueInput: Prisma.albumsWhereUniqueInput,
  ): Promise<Albums | null> {
    return this.prisma.albums.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async albums(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.albumsWhereUniqueInput;
    where?: Prisma.albumsWhereInput;
    orderBy?: Prisma.albumsOrderByWithRelationInput;
  }): Promise<Albums[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.albums.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
