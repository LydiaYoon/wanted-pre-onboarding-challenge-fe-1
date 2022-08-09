import { handleActions } from 'redux-actions';
import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';

// reducer

const initialState = {
  user: { data: null, loading: false, error: null },
  // 혹시 다른 인증이 추가로 필요할 지도 몰라서 auth로 한 번 묶음
};

export default handleActions(
  {
    [SIGNIN]: state => {
      return { ...state, user: { data: null, loading: true, error: null } };
    },
    [SIGNIN_SUCCESS]: (state, { payload }) => {
      return { ...state, user: { data: payload, loading: false, error: null } };
    },
    [SIGNIN_ERROR]: (state, { payload }) => {
      return { ...state, user: { data: null, loading: false, error: payload } };
    },
    [SIGNUP]: state => {
      return { ...state, user: { data: null, loading: true, error: null } };
    },
    [SIGNUP_SUCCESS]: (state, { payload }) => {
      return { ...state, user: { data: payload, loading: false, error: null } };
    },
    [SIGNUP_ERROR]: (state, { payload }) => {
      return { ...state, user: { data: null, loading: false, error: payload } };
    },
  },
  initialState
);
