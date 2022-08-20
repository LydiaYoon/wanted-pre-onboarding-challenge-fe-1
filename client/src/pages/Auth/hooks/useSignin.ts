import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';
import { ErrorResponse } from '../../../api/Api';
import authAPI, { AuthParam, AuthResponse } from '../../../api/authApi';
import { routes } from '../../../routes/routes';

export const useSignin = (errorCallback: () => void) => {
  const navigate = useNavigate();

  const onSuccess = (response: AuthResponse) => {
    console.log(response);
    navigate(routes.todos);
    location.reload();
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    console.log(response?.data.details);
    errorCallback();
  };

  const { mutate } = useMutation<AuthResponse, AxiosError<ErrorResponse>, AuthParam>(
    (user: AuthParam) => authAPI.signin(user),
    { onSuccess, onError }
  );

  return mutate;
};
