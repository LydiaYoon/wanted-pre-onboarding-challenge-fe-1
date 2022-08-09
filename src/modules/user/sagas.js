import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  USER_SIGNIN,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
} from './types';
import { postUserLogin, postUserCreate } from '../../api/user/userApi';

// saga

function* userSigninSaga(action) {
  const param = action.payload;
  try {
    const payload = yield call(postUserLogin, param);
    yield put({
      type: USER_SIGNIN_SUCCESS,
      payload,
    });
  } catch (e) {
    yield put({
      type: USER_SIGNIN_ERROR,
      error: true,
      payload: e,
    });
  }
}

function* userSignupSaga(action) {
  const param = action.payload;

  try {
    const payload = yield call(postUserCreate, param);
    yield put({
      type: USER_SIGNUP_SUCCESS,
      payload,
    });
  } catch (e) {
    yield put({
      type: USER_SIGNUP_ERROR,
      error: true,
      payload: e,
    });
  }
}

export function* userSaga() {
  yield takeEvery(USER_SIGNIN, userSigninSaga);
  yield takeEvery(USER_SIGNUP, userSignupSaga);
}
