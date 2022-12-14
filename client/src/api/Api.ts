import axios, { AxiosError } from 'axios';
import { setSignin } from '../utils/authUtil';

// API 호출 시 사용할 인스턴스
export const clientAPI = axios.create({
  baseURL: 'http://localhost:8080/',
});

// API 호출 후 응답 공통 처리
clientAPI.interceptors.response.use(
  res => {
    // 응답 데이터에 token이 있을 경우 localStorage에 세팅
    if (res.data.token) {
      setSignin(res.data.token, false);
    }
    return res;
  },
  error => {
    handleError(error);
    return Promise.reject(error);
  }
);

// TODO: 비동기 통신 에러처리
export const handleError = (error: Error | AxiosError) => {
  if (error instanceof AxiosError) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  } else {
    console.log(error.message);
  }
};

export interface ErrorResponse {
  details: string;
}
