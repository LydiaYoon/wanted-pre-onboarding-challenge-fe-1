import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import todoAPI, { TodoData, TodoResponse } from '../../api/todo/todoApi';
import { getTodosAsync } from './actions';
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

//saga

function* getTodosSaga({ payload }: ReturnType<typeof getTodosAsync.request>) {
  try {
    const response: TodoResponse<TodoData[]> = yield call(todoAPI.getAll, payload);
    if (!response.data) throw new Error();
    yield put(getTodosAsync.success(response.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(getTodosAsync.failure(e));
    }
  }
}

export function* todoSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
}
