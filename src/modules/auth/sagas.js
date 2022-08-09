import { call, put, takeEvery } from 'redux-saga/effects';
import authAPI from '../../api/auth/authApi';
import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';

// saga

function* signinSaga({ payload }) {
  try {
    const response = yield call(authAPI.signin, payload);
    yield put({
      type: SIGNIN_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: SIGNIN_ERROR,
      error: true,
      payload: e,
    });
  }
}

function* signupSaga({ payload }) {
  try {
    const response = yield call(authAPI.signup, payload);
    yield put({
      type: SIGNUP_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: SIGNUP_ERROR,
      error: true,
      payload: e,
    });
  }
}

export function* authSaga() {
  yield takeEvery(SIGNIN, signinSaga);
  yield takeEvery(SIGNUP, signupSaga);
}
