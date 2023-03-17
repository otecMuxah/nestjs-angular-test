
import {Prisma} from '@prisma/client'




export class CreateUsersDto {
  name: string;
username: string;
email: string;
address?: Prisma.InputJsonValue;
phone?: string;
website?: string;
company?: Prisma.InputJsonValue;
}
