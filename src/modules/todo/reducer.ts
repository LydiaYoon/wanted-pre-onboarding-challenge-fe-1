import { ActionType, createReducer } from 'typesafe-actions';
import { TodoData } from '../../api/todo/todoApi';
import { Response } from '../index';
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
import * as actions from './actions';

// reducer

const initialState: TodoState = {
  todoList: {
    data: [],
    loading: false,
  },
  todoDetail: {
    data: null,
    loading: false,
  },
};

type TodoState = {
  todoList: Response<TodoData[]>;
  todoDetail: Response<TodoData>;
};

type TodoAction = ActionType<typeof actions>;

const todo = createReducer<TodoState, TodoAction>(initialState, {
  [GET_TODOS]: state => ({ ...state, todoList: { data: null, loading: true, error: null } }),
  [GET_TODOS_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      todoList: { data: payload, loading: false, error: null },
    };
  },
  [GET_TODOS_ERROR]: (state, { payload }) => ({
    ...state,
    todoList: { data: null, loading: false, error: payload },
  }),

  [GET_TODO_BY_ID]: state => ({ ...state, todoDetail: { data: null, loading: true, error: null } }),
  [GET_TODO_BY_ID_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      todoDetail: { data: payload, loading: false, error: null },
    };
  },
  [GET_TODO_BY_ID_ERROR]: (state, { payload }) => ({
    ...state,
    todoDetail: { data: null, loading: false, error: payload },
  }),
});

export default todo;
