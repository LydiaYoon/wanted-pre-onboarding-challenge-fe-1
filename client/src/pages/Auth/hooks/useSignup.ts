import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';
import { ErrorResponse } from '../../../api/Api';
import authAPI, { AuthParam, AuthResponse } from '../../../api/authApi';
import { routes } from '../../../routes/routes';

export const useSignup = (errorCallback: () => void) => {
  const navigate = useNavigate();

  const onSuccess = (response: AuthResponse) => {
    alert(response.message);
    navigate(routes.signin);
    location.reload();
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
