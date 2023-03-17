
import {Prisma} from '@prisma/client'




export class UpdateUsersDto {
  name?: string;
username?: string;
email?: string;
address?: Prisma.InputJsonValue;
phone?: string;
website?: string;
company?: Prisma.InputJsonValue;
}
