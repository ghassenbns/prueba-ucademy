import { environment } from '../../environments/environment';
import axios from 'axios';
import User from '../interfaces/user';

const ENDPOINT_USERS_URL = environment.baseUrl + '/users';

export const getUsersByIndex = (from: number) => {
  const URL_PARAMS = ENDPOINT_USERS_URL + '/' + from;
  return axios.get(URL_PARAMS);
};

export const updateUser = (user: User) => {
  return axios.put(ENDPOINT_USERS_URL, user);
};

