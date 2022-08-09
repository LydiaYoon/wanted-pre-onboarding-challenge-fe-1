import { USER_SIGNIN, USER_SIGNUP } from './types';

// action

export const userSignin = ({ email, password }) => ({ type: USER_SIGNIN, payload: { email, password } });
export const userSignup = ({ email, password }) => ({ type: USER_SIGNUP, payload: { email, password } });
