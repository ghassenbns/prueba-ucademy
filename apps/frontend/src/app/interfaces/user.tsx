import Course from './course';

interface User {
  _id:string,
  isOnline: true,
  name: string,
  avatar: string,
  lastName: string,
  username: string,
  email: string,
  phone: string,
  inscriptionDate: string,
  courses: Course[]
}

export default User;
