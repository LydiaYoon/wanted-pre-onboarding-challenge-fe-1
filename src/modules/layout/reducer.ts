import React from 'react';
import { ActionType, createReducer } from 'typesafe-actions';
import { PAGE } from '../../enums/commonEnum';
import * as actions from './actions';
import { SET_PAGE, SET_HEADER_TITLE, OPEN_MODAL, CLOSE_MODAL } from './types';

const initialState: LayoutState = {
  page: null,
  header: {
    title: null,
  },
  modal: {
    isOpen: false,
  },
};

type LayoutAction = ActionType<typeof actions>;

export type ModalState = {
  isOpen: boolean;
  element?: React.ReactNode;
};

export type LayoutState = {
  page: PAGE | null;
  header: {
    title: string | null;
  };
  modal: ModalState;
};

const layout = createReducer<LayoutState, LayoutAction>(initialState, {
  [SET_PAGE]: (state, { payload }) => ({ ...state, page: payload }),
  [SET_HEADER_TITLE]: (state, { payload }) => ({ ...state, header: { title: payload } }),

  [OPEN_MODAL]: (state, { payload }) => ({ ...state, modal: payload }),
  [CLOSE_MODAL]: state => ({ ...state, modal: { isOpen: false } }),
});

export default layout;
