import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todo from './todo';
import auth from './auth';
import { todoSaga } from './todo';
import { authSaga } from './auth';

const rootReducer = combineReducers({
  auth,
  todo,
});

export function* rootSaga() {
  yield all([authSaga(), todoSaga()]);
}

export default rootReducer;
