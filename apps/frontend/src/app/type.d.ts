import { User } from './models/user.model';

type UsersState = {
  loaded: number
  users: User[]
}

type UsersAction = {
  type: string
  loaded?: number
  selectedUser?: User
}

type DispatchType = (args: UsersAction ) => UsersAction
