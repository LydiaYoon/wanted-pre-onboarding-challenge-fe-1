import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import layout from './layout';
import auth from './auth';
import todo from './todo';
import { authSaga } from './auth';
import { todoSaga } from './todo';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../api/Api';

const rootReducer = combineReducers({
  layout,
  auth,
  todo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([authSaga(), todoSaga()]);
}

export interface Response<T> {
  data: T | null;
  loading: boolean;
  error?: Error | AxiosError<ErrorResponse> | null;
}
