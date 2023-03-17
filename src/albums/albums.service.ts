import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, albums } from '@prisma/client';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaService) {}

  async album(
    userWhereUniqueInput: Prisma.albumsWhereUniqueInput,
  ): Promise<albums | null> {
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
  }): Promise<albums[]> {
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
