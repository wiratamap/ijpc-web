import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

const NEXT_PAGE_PAGING_OPTIONS = 'NEXT_PAGE/PAGING_OPTIONS';
const PREVIOUS_PAGE_PAGING_OPTIONS = 'PREVIOUS_PAGE/PAGING_OPTIONS';
const SET_TOTAL_PAGES_PAGING_OPTIONS = 'SET_TOTAL_PAGES/PAGING_OPTIONS';

export const constant = {
  NEXT_PAGE_PAGING_OPTIONS,
  PREVIOUS_PAGE_PAGING_OPTIONS,
  SET_TOTAL_PAGES_PAGING_OPTIONS
};

const nextPagePaginationAction = createAction(NEXT_PAGE_PAGING_OPTIONS);
const previousPagePaginationAction = createAction(PREVIOUS_PAGE_PAGING_OPTIONS);
const setTotalPagesPaginationAction = createAction(SET_TOTAL_PAGES_PAGING_OPTIONS);

export const action = {
  nextPagePaginationAction,
  previousPagePaginationAction,
  setTotalPagesPaginationAction
};

export const initialState = {
  pagingOptions: {
    page: 0,
    limit: 10,
    totalPages: 0
  },
  disabled: {
    previousPageButton: true,
    nextPageButton: true
  },
  queryParameter: '?page=0&limit=10'
};

const nextPagePaginationHandler = (state, { payload }) => ({
  ...state,
  pagingOptions: {
    ...state.pagingOptions,
    page: state.pagingOptions.page + 1
  },
  disabled: {
    previousPageButton: false,
    nextPageButton: payload.isButtonDisabled
  },
  queryParameter: `?page=${state.pagingOptions.page + 1}&limit=${state.pagingOptions.limit}`
});

const previousPagePaginationHandler = (state, { payload }) => ({
  ...state,
  pagingOptions: {
    ...state.pagingOptions,
    page: state.pagingOptions.page - 1
  },
  disabled: {
    previousPageButton: payload.isButtonDisabled,
    nextPageButton: false
  },
  queryParameter: `?page=${state.pagingOptions.page - 1}&limit=${state.pagingOptions.limit}`
});

const setTotalPagesPaginationHandler = (state, { payload }) => ({
  ...state,
  pagingOptions: {
    ...state.pagingOptions,
    totalPages: payload.totalPages
  }
});

export default typeToReducer({
  [NEXT_PAGE_PAGING_OPTIONS]: nextPagePaginationHandler,
  [PREVIOUS_PAGE_PAGING_OPTIONS]: previousPagePaginationHandler,
  [SET_TOTAL_PAGES_PAGING_OPTIONS]: setTotalPagesPaginationHandler
}, initialState);
