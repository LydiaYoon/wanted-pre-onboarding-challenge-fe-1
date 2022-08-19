import { AxiosError } from 'axios';
import { combineReducers } from 'redux';
import { ErrorResponse } from '../api/Api';
import layout from './layout';

const rootReducer = combineReducers({
  layout,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export interface Response<T> {
  data: T | null;
  loading: boolean;
  error?: Error | AxiosError<ErrorResponse> | null;
}
