import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import * as USERS_DATA from '../../../../../DB.json';
@Injectable()
export class UsersService {
  users = USERS_DATA as User[];

  updateUser(user : User) : User {
    const oldUser = this.users.find((u)=> u._id === user._id);
    const targetIdx = this.users.indexOf(oldUser);
    return this.users[targetIdx] = user;
  }

  getAllUsers() : User[] {
    return [...this.users];
  }

}
