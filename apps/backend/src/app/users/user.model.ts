import { Course } from './course.model';

export class User {
  constructor(public _id: string, public isOnline: true, public name: string, public avatar: string, public lastName: string, public username: string, public email: string, public phone: string, public inscriptionDate: string, public courses: Course[]) {
  }
}
