import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { AuthToken, Id, TodoData, TodoParam } from '../../api/todo/todoApi';
import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODO_BY_ID,
  GET_TODO_BY_ID_SUCCESS,
  GET_TODO_BY_ID_ERROR,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
} from './types';

// action

export const getTodosAsync = createAsyncAction(GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR)<
  AuthToken,
  TodoData[],
  AxiosError
>();

export const getTodoByIdAsync = createAsyncAction(GET_TODO_BY_ID, GET_TODO_BY_ID_SUCCESS, GET_TODO_BY_ID_ERROR)<
  { id: Id; authToken: AuthToken },
  TodoData,
  AxiosError
>();

export const createTodoAsync = createAsyncAction(CREATE_TODO, CREATE_TODO_SUCCESS, CREATE_TODO_ERROR)<
  TodoParam,
  TodoData,
  AxiosError
>();

export const updateTodoAsync = createAsyncAction(UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_ERROR)<
  TodoParam,
  TodoData,
  AxiosError
>();

export const deleteTodoAsync = createAsyncAction(DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_ERROR)<
  { id: Id; authToken: AuthToken },
  { data: null | string },
  AxiosError
>();
