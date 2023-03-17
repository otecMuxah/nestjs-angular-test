import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { users } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers(@Param() params): Promise<users[]> {
    return this.userService.users({});
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<users[]> {
    return this.userService.user({ id: Number(id) });
  }
}
