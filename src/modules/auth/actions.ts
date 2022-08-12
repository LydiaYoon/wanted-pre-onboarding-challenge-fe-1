import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { AuthResponse, AuthParam } from '../../api/auth/authApi';
import { SIGNIN, SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNUP, SIGNUP_ERROR, SIGNUP_SUCCESS, SET_AUTH_TOKEN } from './types';

// action

export const signinAsync = createAsyncAction(SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR)<
  AuthParam,
  AuthResponse,
  AxiosError
>();

export const signupAsync = createAsyncAction(SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR)<
  AuthParam,
  AuthResponse,
  AxiosError
>();

export const setAuthToken = createAction(SET_AUTH_TOKEN)<string>();
