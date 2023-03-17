import { Controller, Get, Param } from '@nestjs/common';
import { albums, users } from '@prisma/client';
import { AlbumsService } from './albums.service';
import { Albums } from '../generated/dto/albums/entities/albums.entity';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumsService) {}

  @Get()
  getAllAlbums(@Param() params): Promise<Albums[]> {
    return this.albumService.albums({});
  }

  @Get(':id')
  getAlbum(@Param('id') id: string): Promise<Albums> {
    return this.albumService.album({ id: Number(id) });
  }

  @Get('user/:id')
  getAlbumByUserId(@Param('id') id: string): Promise<Albums> {
    return this.albumService.album({ id: Number(id) });
  }
}
