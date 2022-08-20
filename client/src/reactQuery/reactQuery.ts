import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const isServerError = (error: AxiosError) => {
  if (error.response) {
    return error.response?.status >= 500 || !error.response?.status;
  }
  return true;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: error => isServerError(error as AxiosError),
    },
    mutations: {
      useErrorBoundary: error => isServerError(error as AxiosError),
    },
  },
});
