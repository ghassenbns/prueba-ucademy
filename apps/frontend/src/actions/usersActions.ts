import { Dispatch } from 'redux';
import { LOADING_USERS, UPDATING_USER, USERS_FAIL, USERS_SUCCESS, UsersDispatchTypes } from './usersActionsTypes';
import { getUsersByIndex, updateUser } from '../app/api/users-api';
import User from '../app/interfaces/user';

export const GetUsers = (from : number) => async (dispatch: Dispatch<UsersDispatchTypes>) => {
  try {
    dispatch({
      type: LOADING_USERS
    });
    const res = await getUsersByIndex(from);
    dispatch({
      type: USERS_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: USERS_FAIL
    });
  }
};

export const UpdateUser = (user : User) => async (dispatch: Dispatch<UsersDispatchTypes>) => {
  try {
    dispatch({
      type: LOADING_USERS
    });
    const {data} = await updateUser(user);
    dispatch({
      type: UPDATING_USER,
      payload: {
        user : data
      }
    });
  } catch (e) {
    dispatch({
      type: USERS_FAIL
    });
  }
};
