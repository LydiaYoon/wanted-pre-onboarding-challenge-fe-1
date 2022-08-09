import {
  USER_SIGNIN,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
} from './types';

// reducer

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_SIGNIN:
      return { ...state, data: null, loading: true, error: null };
    case USER_SIGNIN_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_SIGNIN_ERROR:
      return { ...state, data: null, loading: false, error: action.payload };

    case USER_SIGNUP:
      return { ...state, data: null, loading: true, error: null };
    case USER_SIGNUP_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_SIGNUP_ERROR:
      return { ...state, data: null, loading: false, error: action.payload };

    default:
      return state;
  }
}
