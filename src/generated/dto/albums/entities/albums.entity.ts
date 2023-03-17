
import {Users} from '../../users/entities/users.entity'
import {Photos} from '../../photos/entities/photos.entity'


export class Albums {
  userId: number ;
id: number ;
title: string ;
users?: Users ;
photos?: Photos[] ;
}
