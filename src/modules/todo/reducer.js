import { handleActions } from 'redux-actions';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from './types';

// reducer

const initialState = {
  todoList: {
    datas: [],
    loading: false,
    error: null,
  },
  todoDetail: {
    data: null,
    loading: false,
    error: null,
  },
};

export default handleActions(
  {
    [GET_TODOS]: state => {
      return { ...state, todoList: { data: null, loading: true, error: null } };
    },
    [GET_TODOS_SUCCESS]: (state, { payload }) => {
      return { ...state, todoList: { data: payload, loading: false, error: null } };
    },
    [GET_TODOS_ERROR]: (state, { payload }) => {
      return { ...state, todoList: { data: null, loading: false, error: payload } };
    },
  },
  initialState
);
