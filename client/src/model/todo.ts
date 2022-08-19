export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TODO_KEY = 'getTodo';

export const todoCache = {
  getAll: TODO_KEY,
  getById: (todoId: string) => TODO_KEY + todoId,
};
