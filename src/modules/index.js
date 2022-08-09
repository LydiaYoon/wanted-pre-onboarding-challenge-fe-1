import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todo from './todo';
import user from './user';
import { todoSaga } from './todo/sagas';
import { userSaga } from './user';

const rootReducer = combineReducers({
  user,
  todo,
});

export function* rootSaga() {
  yield all([userSaga(), todoSaga()]);
}

export default rootReducer;
