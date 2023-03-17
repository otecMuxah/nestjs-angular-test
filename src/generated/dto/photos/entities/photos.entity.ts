
import {Albums} from '../../albums/entities/albums.entity'


export class Photos {
  albumId: number  | null;
id: number ;
title: string  | null;
url: string ;
thumbnailUrl: string  | null;
albums?: Albums  | null;
}
