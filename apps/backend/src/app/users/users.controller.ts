import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':from')
  async getSlice(@Param('from') from: string): Promise<{users:User[], max : number}> {
    return await this.usersService.getUsersByIndexes(+from);
  }

  @Put()
  async update(@Body() user: User): Promise<User> {
    return await this.usersService.updateUser(user);
  }
}
