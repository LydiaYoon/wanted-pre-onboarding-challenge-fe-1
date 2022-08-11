import { clientApi } from '../Api';
import { AxiosResponse } from 'axios';

const todoAPI = {
  getAll: async (authToken: AuthToken) => {
    const response: AxiosResponse = await clientApi.get<TodoResponse<TodoData[]>>('/todos', {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },

  getById: async ({ id, authToken }: { id: Id; authToken: AuthToken }) => {
    const response: AxiosResponse = await clientApi.get<TodoResponse<TodoData>>(`/todos/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },

  create: async ({ title, content, authToken }: TodoParam) => {
    const response: AxiosResponse = await clientApi.post<TodoResponse<TodoData>>(
      '/todos',
      { title, content },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    return response.data;
  },

  update: async ({ title, content, authToken }: TodoParam) => {
    const response: AxiosResponse = await clientApi.put<TodoResponse<TodoData>>(
      '/todos',
      { title, content },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    return response.data;
  },

  delete: async ({ id, authToken }: { id: Id; authToken: AuthToken }) => {
    const response: AxiosResponse = await clientApi.delete<TodoResponse<string>>(`/todos/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },
};

export default todoAPI;

export type Id = string;
export type AuthToken = string;

export interface TodoParam {
  title: string;
  content: string;
  authToken: AuthToken;
}

export interface TodoResponse<T> {
  data: T | null;
}

export interface TodoData {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updatedAt: string;
}
