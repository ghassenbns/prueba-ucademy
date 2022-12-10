import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import * as USERS_DATA from '../../../../../DB.json';
import fs = require('fs');

@Injectable()
export class UsersService {
  JSON_PATH = '../../../../../DB.json';
  users = USERS_DATA as User[];

  async updateUser(user : User) : Promise<User> {
    const oldUser = this.users.find((u)=> u._id === user._id);
    const targetIdx = this.users.indexOf(oldUser);
    this.users[targetIdx] = user;
    fs.writeFile(this.JSON_PATH, JSON.stringify(this.users), function writeJSON(err) {
      if (err) return console.error(err);
    });
    return this.users[targetIdx];
  }

  async getUsersByIndexes(from: number) : Promise<{users:User[], max:number}> {
    const to = from + 20;
    return {users : [...this.users.slice(from, to)], max: this.users.length}
  }


  async getAllUsers() : Promise<User[]> {
    return [...this.users];
  }

}
