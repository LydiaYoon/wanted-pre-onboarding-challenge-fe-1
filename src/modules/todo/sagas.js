import { call, put, takeEvery } from 'redux-saga/effects';
import todoAPI from '../../api/todo/todoApi';
import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_BY_ID,
  GET_TODOS_BY_ID_SUCCESS,
  GET_TODOS_BY_ID_ERROR,
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

function* getTodos({ payload }) {
  try {
    const response = yield call(todoAPI.getAll, payload);
    yield put({
      type: GET_TODOS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: GET_TODOS_ERROR,
      error: true,
      payload: e,
    });
  }
}

export function* todoSaga() {
  yield takeEvery(GET_TODOS, getTodos);
}
