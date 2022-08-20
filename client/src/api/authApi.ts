import { clientAPI } from './Api';

// API 인스턴스를 사용한 서버 통신
const authAPI = {
  signin: async (body: AuthParam) => {
    const response = await clientAPI.post<AuthResponse>('/users/login', body);
    return response.data;
  },

  signup: async (body: AuthParam) => {
    const response = await clientAPI.post<AuthResponse>('/users/create', body);
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
