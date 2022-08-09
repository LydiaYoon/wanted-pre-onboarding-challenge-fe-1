import { call, put, takeEvery } from 'redux-saga/effects';
import authAPI from '../../api/auth/authApi';
import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';

// saga

function* signinSaga(action) {
  const param = action.payload;
  try {
    const payload = yield call(authAPI.signin, param);
    yield put({
      type: SIGNIN_SUCCESS,
      payload,
    });
  } catch (e) {
    yield put({
      type: SIGNIN_ERROR,
      error: true,
      payload: e,
    });
  }
}

function* signupSaga(action) {
  const param = action.payload;

  try {
    const payload = yield call(authAPI.signup, param);
    yield put({
      type: SIGNUP_SUCCESS,
      payload,
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
