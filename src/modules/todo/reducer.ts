import { ActionType, createReducer } from 'typesafe-actions';
import { TodoData } from '../../api/todo/todoApi';
import { Response } from '../index';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from './types';
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
  [GET_TODOS_ERROR]: (state, { payload }) => ({ ...state, todoList: { data: null, loading: false, error: payload } }),
});

export default todo;
