import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import { ErrorResponse } from '../../../api/Api';
import todoAPI, { TodoData, TodoResponse, UpdateTodoParam } from '../../../api/todoApi';
import { todoCache } from '../../../reactQuery/todoCache';
import { queryClient } from '../../../reactQuery/reactQuery';
import { isSignin } from '../../../utils/authUtil';

export const useUpdateTodo = () => {
  const [, setSearchParams] = useSearchParams();

  if (!isSignin()) {
    throw new Error('Token of user authentication is invalid.');
  }

  const onSuccess = (response: TodoResponse<TodoData>) => {
    if (response.data) {
      alert('수정되었습니다.');
      setSearchParams({ id: response.data.id });
      queryClient.invalidateQueries([todoCache.getById(response.data.id)]);
    }
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    console.log(response?.data.details);
  };

  const { mutate } = useMutation<TodoResponse<TodoData>, AxiosError<ErrorResponse>, UpdateTodoParam>(todoAPI.update, {
    onSuccess,
    onError,
  });

  return mutate;
};
