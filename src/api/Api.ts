import axios, { AxiosError } from 'axios';

export const clientApi = axios.create({
  baseURL: 'http://localhost:8080/',
});

// TODO: 비동기 통신 에러처리
export const handleError = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error)) {
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