import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import authAPI, { AuthResponse } from '../../api/auth/authApi';
import { signinAsync, signupAsync } from './actions';
import { SIGNIN, SIGNUP } from './types';

// saga

function* signinSaga({ payload }: ReturnType<typeof signinAsync.request>) {
  try {
    const response: AuthResponse = yield call(authAPI.signin, payload);
    yield put(signinAsync.success(response));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(signinAsync.failure(e));
    }
  }
}

function* signupSaga({ payload }: ReturnType<typeof signupAsync.request>) {
  try {
    const response: AuthResponse = yield call(authAPI.signup, payload);
    yield put(signupAsync.success(response));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(signupAsync.failure(e));
    }
  }
}

export function* authSaga() {
  yield takeEvery(SIGNIN, signinSaga);
  yield takeEvery(SIGNUP, signupSaga);
}
