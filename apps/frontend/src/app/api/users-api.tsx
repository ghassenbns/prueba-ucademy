import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

const USERS_URL = environment.baseUrl + '/users';

export const getAllUsers = (): Promise<User[]> =>  {
  return fetch(USERS_URL)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

export const updateUser = (user : User): Promise<User> =>  {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };
  return fetch(USERS_URL, requestOptions)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

