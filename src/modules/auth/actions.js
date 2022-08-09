import { SIGNIN, SIGNUP } from './types';

// action

export const signin = payload => ({ type: SIGNIN, payload });
export const signup = payload => ({ type: SIGNUP, payload });
