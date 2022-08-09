import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';

// reducer

const initialState = {
  user: { data: null, loading: false, error: null },
  // 혹시 다른 인증이 추가로 필요할 지도 몰라서 auth로 한 번 묶음
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return { ...state, user: { data: null, loading: true, error: null } };
    case SIGNIN_SUCCESS:
      return { ...state, user: { data: action.payload, loading: false, error: null } };
    case SIGNIN_ERROR:
      return { ...state, user: { data: null, loading: false, error: action.payload } };

    case SIGNUP:
      return { ...state, user: { data: null, loading: true, error: null } };
    case SIGNUP_SUCCESS:
      return { ...state, user: { data: action.payload, loading: false, error: null } };
    case SIGNUP_ERROR:
      return { ...state, user: { data: null, loading: false, error: action.payload } };

    default:
      return state;
  }
}
