import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorResponse } from '../../../api/Api';
import todoAPI, { CreateTodoParam, TodoData, TodoResponse } from '../../../api/todo/todoApi';
import { todoCache } from '../../../model/todo';

export const useCreateTodo = () => {
  const navigate = useNavigate();

  const client = useQueryClient();

  const authToken = JSON.parse(localStorage.getItem('authToken') as string);
  if (!authToken || (!!authToken && !authToken.token)) {
    throw new Error('Token of user authentication is invalid.');
  }

  const onSuccess = (response: TodoResponse<TodoData>) => {
    if (response.data) {
      alert('생성되었습니다.');
      navigate('/todos');
      client.invalidateQueries([todoCache.getAll]);
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
