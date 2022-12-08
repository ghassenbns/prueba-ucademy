import * as actionTypes from './actionTypes';
import { User } from '../models/user.model';
import { UsersAction, UsersState } from '../type';

const initialState: UsersState = {
  users: [],
  loaded: 0
};

const reducer = (
  state: UsersState = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case actionTypes.GET_USERS_BY_INDEXES:
      const users: User[] = [];
      return {
        ...state,
        users: [...state.users, ...users]
      };
    case actionTypes.UPDATE_USER:
      if(action.selectedUser){
        const updatedUser: User = {
          _id: action.selectedUser._id,
          isOnline: action.selectedUser.isOnline,
          name: action.selectedUser.name,
          avatar: action.selectedUser.avatar,
          lastName: action.selectedUser.lastName,
          username: action.selectedUser.username,
          email: action.selectedUser.email,
          phone: action.selectedUser.phone,
          inscriptionDate: action.selectedUser.inscriptionDate,
          courses: action.selectedUser.courses
        };
        const prevStateUser = state.users.find((u : User) => u._id === updatedUser._id);
        if (prevStateUser) {
          const prevStateUserIndex = state.users.indexOf(prevStateUser);
          if(prevStateUserIndex !== -1){
            return {
              ...state,
              users: [state.users[prevStateUserIndex] = updatedUser]
            };
          }
        }
      }
  }
  return state;
};

export default reducer;
