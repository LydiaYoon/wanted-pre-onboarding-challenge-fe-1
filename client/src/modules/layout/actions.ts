import { createAction } from 'typesafe-actions';
import { PAGE } from '../../enums/commonEnum';
import { ModalState } from './reducer';
import { CLOSE_MODAL, OPEN_MODAL, SET_HEADER_TITLE, SET_PAGE } from './types';

export const setPage = createAction(SET_PAGE)<PAGE>();

export const setHeaderTitle = createAction(SET_HEADER_TITLE)<string>();

export const openModal = createAction(OPEN_MODAL)<ModalState>();
export const closeModal = createAction(CLOSE_MODAL)();
