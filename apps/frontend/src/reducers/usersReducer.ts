import User from '../app/interfaces/user';
import { UsersDispatchTypes } from '../actions/usersActionsTypes';

interface DefaultStateI {
  loading: boolean,
  users: User[],
  max: number
}

const defaultState: DefaultStateI = {
  loading: false,
  users: [],
  max: 0
};

const usersReducer = (state: DefaultStateI = defaultState, action: UsersDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case 'USERS_FAIL':
      return {
        loading: false,
        users: state.users,
        max: state.max
      };
    case 'LOADING_USERS':
      return {
        loading: true,
        users: state.users,
        max: state.max
      };
    case 'USERS_SUCCESS':
      return {
        loading: false,
        users: [...state.users, ...action.payload.users],
        max: action.payload.max
      };
    case 'UPDATING_USER':
      return {
        loading: false,
        users: replaceUser(action.payload.user, state.users),
        max: state.max
      };
    default:
      return defaultState
  }
};

const replaceUser = (user: User, users: User[]): User[] => {
  const index = users.map((user)=> user._id).indexOf(user._id);
  users[index] = user;
  return users;
};

export default usersReducer;
