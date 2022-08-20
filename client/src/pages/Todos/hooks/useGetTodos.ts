import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import todoAPI from '../../../api/todoApi';
import { todoCache } from '../../../reactQuery/todoCache';
import { isSignin } from '../../../utils/authUtil';

export const useGetTodos = () => {
  const [searchParams] = useSearchParams();
  const todoId = searchParams.get('id');

  const authToken = JSON.parse(localStorage.getItem('authToken') as string);
  if (!isSignin()) {
    throw new Error('Token of user authentication is invalid.');
  }

  const { data, ...queryResult } = todoId
    ? useQuery([todoCache.getById(todoId)], () => todoAPI.getById({ id: todoId, authToken: authToken.token }))
    : useQuery([todoCache.getAll], () => todoAPI.getAll(authToken.token));

  return data?.data;
};
