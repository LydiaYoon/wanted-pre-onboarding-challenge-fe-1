import { put, takeEvery } from 'redux-saga/effects';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';
import { createTodo, updateTodo, deleteTodo } from './actions';

// Saga

function* createTodoSaga() {
  yield put(createTodo());
}

function* updateTodoSaga() {
  yield put(updateTodo());
}

function* deleteTodoSaga() {
  yield put(deleteTodo());
}

export function* todoSaga() {
  yield takeEvery(CREATE_TODO, createTodoSaga);
  yield takeEvery(UPDATE_TODO, updateTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
}
