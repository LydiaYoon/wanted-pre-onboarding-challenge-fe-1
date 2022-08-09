import { GET_TODOS, GET_TODOS_BY_ID, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

// 액션 생성 함수
export const getTodos = () => ({ type: GET_TODOS });
export const getTodosById = id => ({ type: GET_TODOS_BY_ID, payload: id });

export const createTodo = () => ({ type: CREATE_TODO });
export const updateTodo = () => ({ type: UPDATE_TODO });
export const deleteTodo = () => ({ type: DELETE_TODO });
