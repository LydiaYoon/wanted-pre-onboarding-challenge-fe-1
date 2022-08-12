import { createAction } from 'typesafe-actions';
import { PAGE } from '../../enums/commonEnum';
import { SET_HEADER_TITLE, SET_PAGE } from './types';

export const setPage = createAction(SET_PAGE)<PAGE>();

export const setHeaderTitle = createAction(SET_HEADER_TITLE)<string>();
