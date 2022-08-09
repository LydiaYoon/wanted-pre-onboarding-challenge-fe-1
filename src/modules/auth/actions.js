import { createAction } from 'redux-actions';
import { SIGNIN, SIGNUP } from './types';

// action

export const signin = createAction(SIGNIN); // { mail, password }
export const signup = createAction(SIGNUP); // { mail, password }
