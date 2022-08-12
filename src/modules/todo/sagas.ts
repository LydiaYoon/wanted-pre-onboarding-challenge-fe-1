import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import todoAPI, { TodoData, TodoResponse } from '../../api/todo/todoApi';
import { getTodosAsync, getTodoByIdAsync, createTodoAsync, updateTodoAsync, deleteTodoAsync } from './actions';
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

function* createTodoSaga({ payload }: ReturnType<typeof createTodoAsync.request>) {
  try {
    const response: TodoResponse<TodoData> = yield call(todoAPI.create, payload);
    if (!response.data) throw new Error('There is no response result data.');
    yield put(createTodoAsync.success(response.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(createTodoAsync.failure(e));
    }
  }
}

function* updateTodoSaga({ payload }: ReturnType<typeof updateTodoAsync.request>) {
  try {
    const response: TodoResponse<TodoData> = yield call(todoAPI.update, payload);
    if (!response.data) throw new Error('There is no response result data.');
    yield put(updateTodoAsync.success(response.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(updateTodoAsync.failure(e));
    }
  }
}

function* deleteTodoSaga({ payload }: ReturnType<typeof deleteTodoAsync.request>) {
  try {
    const response: TodoResponse<string> = yield call(todoAPI.delete, payload);
    if (!response.data) throw new Error('There is no response result data.');
    yield put(deleteTodoAsync.success(response.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(deleteTodoAsync.failure(e));
    }
  }
}

export function* todoSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeEvery(GET_TODO_BY_ID, getTodoByIdSaga);
  yield takeEvery(CREATE_TODO, createTodoSaga);
  yield takeEvery(UPDATE_TODO, updateTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
}
