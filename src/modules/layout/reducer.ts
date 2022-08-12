import { ActionType, createReducer } from 'typesafe-actions';
import { PAGE } from '../../enums/commonEnum';
import * as actions from './actions';
import { SET_PAGE, SET_HEADER_TITLE } from './types';

const initialState: LayoutState = {
  page: null,
  header: {
    title: null,
  },
};

type LayoutAction = ActionType<typeof actions>;

type LayoutState = {
  page: PAGE | null;
  header: {
    title: string | null;
  };
};

const layout = createReducer<LayoutState, LayoutAction>(initialState, {
  [SET_PAGE]: (state, { payload }) => ({ ...state, page: payload }),
  [SET_HEADER_TITLE]: (state, { payload }) => ({ ...state, header: { title: payload } }),
});

export default layout;
