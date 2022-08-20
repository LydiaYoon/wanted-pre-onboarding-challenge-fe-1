import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorResponse } from '../../../api/Api';
import todoAPI, { CreateTodoParam, TodoData, TodoResponse } from '../../../api/todoApi';
import { todoCache } from '../../../reactQuery/todoCache';
import { queryClient } from '../../../reactQuery/reactQuery';
import { routes } from '../../../routes/routes';
import { isSignin } from '../../../utils/authUtil';

export const useCreateTodo = () => {
  const navigate = useNavigate();

  if (!isSignin()) {
    throw new Error('Token of user authentication is invalid.');
  }

  const onSuccess = (response: TodoResponse<TodoData>) => {
    if (response.data) {
      alert('생성되었습니다.');
      navigate(routes.todos);
      queryClient.invalidateQueries([todoCache.getAll]);
    }
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    console.log(response?.data.details);
  };

  const { mutate } = useMutation<TodoResponse<TodoData>, AxiosError<ErrorResponse>, CreateTodoParam>(todoAPI.create, {
    onSuccess,
    onError,
  });

  return mutate;
};
