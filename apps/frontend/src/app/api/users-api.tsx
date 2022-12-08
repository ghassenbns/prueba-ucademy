import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import axios from 'axios';

const ENDPOINT_USERS_URL = environment.baseUrl + '/users';

export const getAllUsers = (): Promise<User[]> =>  {
  return axios.get(ENDPOINT_USERS_URL)
    .then(res =>  res)
    .catch((err) =>  err);
};

export const getUsersByIndex = (from : number): Promise<User[]> =>  {
  const URL_PARAMS = ENDPOINT_USERS_URL + '/' + from;
  return axios.get(URL_PARAMS)
    .then(res =>  res.data)
    .catch((err) =>  err);
};

export const updateUser = (user : User): Promise<User> =>  {
  return axios.put(ENDPOINT_USERS_URL, user)
    .then(res =>  res)
    .catch((err) =>  err);
};

