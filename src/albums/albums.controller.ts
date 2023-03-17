import { Controller, Get, Param } from '@nestjs/common';
import { albums, users } from '@prisma/client';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumsService) {}

  @Get()
  getAllAlbums(@Param() params): Promise<albums[]> {
    return this.albumService.albums({});
  }

  @Get(':id')
  getAlbum(@Param('id') id: string): Promise<albums> {
    return this.albumService.album({ id: Number(id) });
  }

  @Get('user/:id')
  getAlbumByUserId(@Param('id') id: string): Promise<albums> {
    return this.albumService.album({ id: Number(id) });
  }
}
