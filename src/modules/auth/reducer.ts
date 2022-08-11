import { ActionType, createReducer } from 'typesafe-actions';
import { AuthResponse } from '../../api/auth/authApi';
import { Response } from '../index';
import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';
import * as actions from './actions';

// reducer

const initialState: AuthState = {
  user: { data: null, loading: false },
};

type AuthState = {
  user: Response<AuthResponse>;
};

type AuthAction = ActionType<typeof actions>;

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [SIGNIN]: state => ({ ...state, user: { data: null, loading: true, error: null } }),
  [SIGNIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    user: { data: payload, loading: false, error: null },
  }),
  [SIGNIN_ERROR]: (state, { payload }) => ({
    ...state,
    user: { data: null, loading: false, error: payload },
  }),

  [SIGNUP]: state => ({ ...state, user: { data: null, loading: true, error: null } }),
  [SIGNUP_SUCCESS]: (state, { payload }) => ({
    ...state,
    user: { data: payload, loading: false, error: null },
  }),
  [SIGNUP_ERROR]: (state, { payload }) => ({
    ...state,
    user: { data: null, loading: false, error: payload },
  }),
});

export default auth;
