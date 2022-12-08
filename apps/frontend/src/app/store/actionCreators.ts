import * as actionTypes from "./actionTypes"
import { getUsersByIndex, updateUser } from '../api/users-api';
import { User } from '../models/user.model';
import { UsersAction } from '../type';

export async function getUsersByIndexes(loaded: number) {
  console.log(loaded);
  const action: UsersAction = {
    type: actionTypes.GET_USERS_BY_INDEXES,
    loaded: loaded
  };
  if (action.loaded || action.loaded === 0) return await getUsersByIndex(action.loaded);
  return console.error('loaded is not defined');
}

export async function updateSelectedUser(user: User) {
  const action: UsersAction = {
    type: actionTypes.UPDATE_USER,
    selectedUser: user,
  };
  if (action.selectedUser) return await updateUser(action.selectedUser);
  return console.error('selectedUser is not defined');
}
