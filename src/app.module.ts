import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UserService } from './users/user.service';
import { PrismaService } from './prisma.service';
import { AlbumsController } from './albums/albums.controller';
import { AlbumsService } from './albums/albums.service';
import { PhotosController } from './photos/photos.controller';
import { PhotosService } from './photos/photos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nestjs_db',
      username: 'root',
      password: 'root',
      database: 'coding_challenge',
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    UsersController,
    AlbumsController,
    PhotosController,
  ],
  providers: [
    PrismaService,
    AppService,
    UserService,
    AlbumsService,
    PhotosService,
  ],
})
export class AppModule {}
