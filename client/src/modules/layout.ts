import React from 'react';
import { ActionType, createReducer } from 'typesafe-actions';
import { createAction } from 'typesafe-actions';

// Action Types
export const SET_PAGE = 'layout/SET_PAGE';
export const SET_HEADER_TITLE = 'layout/SET_HEADER_TITLE';
export const OPEN_MODAL = 'layout/OPEN_MODAL';
export const CLOSE_MODAL = 'layout/CLOSE_MODAL';

// Action Creator
export const setPage = createAction(SET_PAGE)<string>();
export const setHeaderTitle = createAction(SET_HEADER_TITLE)<string>();
export const openModal = createAction(OPEN_MODAL)<ModalState>();
export const closeModal = createAction(CLOSE_MODAL)();

const actions = { setPage, setHeaderTitle, openModal, closeModal };
type LayoutAction = ActionType<typeof actions>;

const initialState: LayoutState = {
  page: null,
  header: {
    title: null,
  },
  modal: {
    isOpen: false,
  },
};

export type ModalState = {
  isOpen: boolean;
  element?: React.ReactNode;
};

export type LayoutState = {
  page: string | null;
  header: {
    title: string | null;
  };
  modal: ModalState;
};

// Reducer
const layout = createReducer<LayoutState, LayoutAction>(initialState, {
  [SET_PAGE]: (state, { payload }) => ({ ...state, page: payload }),
  [SET_HEADER_TITLE]: (state, { payload }) => ({ ...state, header: { title: payload } }),
  [OPEN_MODAL]: (state, { payload }) => ({ ...state, modal: payload }),
  [CLOSE_MODAL]: state => ({ ...state, modal: { isOpen: false } }),
});

export default layout;
