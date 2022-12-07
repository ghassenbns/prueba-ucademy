import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import * as USERS_DATA from '../../../../../DB.json';
@Injectable()
export class UsersService {
  users = USERS_DATA as User[];

  async updateUser(user : User) : Promise<User> {
    const oldUser = this.users.find((u)=> u._id === user._id);
    const targetIdx = this.users.indexOf(oldUser);
    return this.users[targetIdx] = user;
  }

  async getUsersByIndexes(from: number) : Promise<User[]> {
    const to = from + 20;
    return [...this.users.slice(from, to)]
  }


  async getAllUsers() : Promise<User[]> {
    return [...this.users];
  }

}
