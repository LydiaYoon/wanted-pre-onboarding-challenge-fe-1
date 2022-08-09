import { createAction } from 'redux-actions';
import { GET_TODOS, GET_TODOS_BY_ID, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

// action

export const getTodos = createAction(GET_TODOS);
export const getTodosById = createAction(GET_TODOS_BY_ID);
export const createTodo = createAction(CREATE_TODO);
export const updateTodo = createAction(UPDATE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
