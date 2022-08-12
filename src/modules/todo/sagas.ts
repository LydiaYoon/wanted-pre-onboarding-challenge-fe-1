import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import todoAPI, { TodoData, TodoResponse } from '../../api/todo/todoApi';
import { getTodoByIdAsync, getTodosAsync } from './actions';
import { GET_TODOS, GET_TODO_BY_ID, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

//saga

function* getTodosSaga({ payload }: ReturnType<typeof getTodosAsync.request>) {
  try {
    const response: TodoResponse<TodoData[]> = yield call(todoAPI.getAll, payload);
    if (!response.data) throw new Error('There is no response result data.');
    yield put(getTodosAsync.success(response.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(getTodosAsync.failure(e));
    }
  }
}

function* getTodoByIdSaga({ payload }: ReturnType<typeof getTodoByIdAsync.request>) {
  try {
    const response: TodoResponse<TodoData> = yield call(todoAPI.getById, payload);
    if (!response.data) throw new Error('There is no response result data.');
    yield put(getTodoByIdAsync.success(response.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(getTodoByIdAsync.failure(e));
    }
  }
}

export function* todoSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeEvery(GET_TODO_BY_ID, getTodoByIdSaga);
}
