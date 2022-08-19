import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../../api/Api';
import authAPI, { AuthParam, AuthResponse } from '../../../api/auth/authApi';

export const useSignup = (errorCallback: () => void) => {
  const onSuccess = (response: AuthResponse) => {
    console.log(response);
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    console.log(response?.data.details);
    errorCallback();
  };

  const { mutate } = useMutation<AuthResponse, AxiosError<ErrorResponse>, AuthParam>(
    (user: AuthParam) => authAPI.signup(user),
    { onSuccess, onError }
  );

  return mutate;
};
