import User from '../app/interfaces/user';

export const LOADING_USERS = "LOADING_USERS";
export const USERS_FAIL = "USERS_FAIL";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const UPDATING_USER = "UPDATING_USER";


export interface LoadingUsers {
  type: typeof LOADING_USERS
}

export interface UsersFail {
  type: typeof USERS_FAIL
}

export interface UsersSuccess {
  type: typeof USERS_SUCCESS
  payload: {
    users : User[]
    max:number
  }
}

export interface UpdatingUser {
  type: typeof UPDATING_USER
  payload:{
    user : User
  }
}

export type UsersDispatchTypes = LoadingUsers | UsersFail | UsersSuccess | UpdatingUser;
