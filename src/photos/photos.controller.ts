import { Controller, Get, Param } from '@nestjs/common';
import { photos } from '@prisma/client';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}
  @Get('album/:id')
  getAlbumByAlbumId(@Param('id') id: string): Promise<photos[]> {
    return this.photosService.photosByAlbumId(Number(id));
  }
}
