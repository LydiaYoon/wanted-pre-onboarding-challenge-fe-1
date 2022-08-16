import { clientAPI } from '../Api';

// API 인스턴스를 사용한 서버 통신
const todoAPI = {
  getAll: async (authToken: AuthToken) => {
    const response = await clientAPI.get<TodoResponse<TodoData[]>>('/todos', {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },

  getById: async ({ id, authToken }: { id: Id; authToken: AuthToken }) => {
    const response = await clientAPI.get<TodoResponse<TodoData>>(`/todos/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },

  create: async ({ title, content, authToken }: TodoParam) => {
    const response = await clientAPI.post<TodoResponse<TodoData>>(
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
    const response = await clientAPI.put<TodoResponse<TodoData>>(
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
    const response = await clientAPI.delete<TodoResponse<string>>(`/todos/${id}`, {
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
  createdAt: string;
  updatedAt: string;
}
