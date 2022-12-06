import { Body, Controller, Get, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get()
  getAll(): User[] {
    return this.usersService.getAllUsers();
  }

  @Put()
  update(@Body() user: User): User {
    return this.usersService.updateUser(user);
  }
}
