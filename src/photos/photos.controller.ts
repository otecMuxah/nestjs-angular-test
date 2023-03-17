import { Controller, Get, Param } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photos } from '../generated/dto/photos/entities/photos.entity';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}
  @Get('album/:id')
  getAlbumByAlbumId(@Param('id') id: string): Promise<Photos[]> {
    return this.photosService.photosByAlbumId(Number(id));
  }
}
