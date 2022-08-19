import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import { ErrorResponse } from '../../../api/Api';
import todoAPI, { TodoData, TodoResponse, UpdateTodoParam } from '../../../api/todo/todoApi';
import { todoCache } from '../../../model/todo';

export const useUpdateTodo = () => {
  const [, setSearchParams] = useSearchParams();

  const client = useQueryClient();

  const authToken = JSON.parse(localStorage.getItem('authToken') as string);
  if (!authToken || (!!authToken && !authToken.token)) {
    throw new Error('Token of user authentication is invalid.');
  }

  const onSuccess = (response: TodoResponse<TodoData>) => {
    if (response.data) {
      alert('수정되었습니다.');
      setSearchParams({ id: response.data.id });
      client.invalidateQueries([todoCache.getById(response.data.id)]);
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
