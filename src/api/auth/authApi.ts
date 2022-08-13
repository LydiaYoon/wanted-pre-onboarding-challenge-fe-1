import { clientAPI } from '../Api';
import { AxiosResponse } from 'axios';

const authAPI = {
  signin: async (body: AuthParam) => {
    const response: AxiosResponse = await clientAPI.post<AuthResponse>('/users/login', body);
    return response.data;
  },

  signup: async (body: AuthParam) => {
    const response: AxiosResponse = await clientAPI.post<AuthResponse>('/users/create', body);
    return response.data;
  },
};

export default authAPI;

export interface AuthParam {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
}
