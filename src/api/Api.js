import axios, { AxiosError, AxiosResponse } from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:8080/',
});

export const handleError = error => {
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
  return error;
};
