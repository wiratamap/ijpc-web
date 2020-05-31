import paginationReducer, { action, constant, initialState } from './paginationReducer';

describe('paginationReducer', () => {
  describe('#nextPagePaginationAction', () => {
    it('should define nextPagePaginationAction', () => {
      expect(action.nextPagePaginationAction).toBeDefined();
    });

    it('should return action with NEXT_PAGE_PAGING_OPTIONS type', () => {
      expect(action.nextPagePaginationAction().type).toEqual(constant.NEXT_PAGE_PAGING_OPTIONS);
    });

    it('should add page number and disabled next button when next page is last page', () => {
      const expectedNewState = {
        pagingOptions: { page: 1, limit: 10, totalPages: 0 },
        disabled: {
          previousPageButton: false,
          nextPageButton: true
        },
        queryParameter: '?page=1&limit=10'
      };
      const newAction = {
        type: constant.NEXT_PAGE_PAGING_OPTIONS,
        payload: { isButtonDisabled: true }
      };

      const nextState = paginationReducer(initialState, newAction);

      expect(nextState).toEqual(expectedNewState);
    });
  });

  describe('#previousPagePaginationAction', () => {
    it('should define previousPagePaginationAction', () => {
      expect(action.previousPagePaginationAction).toBeDefined();
    });

    it('should return action with PREVIOUS_PAGE_PAGING_OPTIONS type', () => {
      expect(action.previousPagePaginationAction().type)
        .toEqual(constant.PREVIOUS_PAGE_PAGING_OPTIONS);
    });

    it('should subtract page number when there are still data on previous page', () => {
      const newInitialState = {
        pagingOptions: { page: 1, limit: 10, totalPages: 0 },
        disabled: {
          previousPageButton: true,
          nextPageButton: false
        },
        queryParameter: '?page=1&limit=10'
      };
      const expectedNewState = {
        pagingOptions: { page: 0, limit: 10, totalPages: 0 },
        disabled: {
          previousPageButton: false,
          nextPageButton: false
        },
        queryParameter: '?page=0&limit=10'
      };
      const newAction = {
        type: constant.PREVIOUS_PAGE_PAGING_OPTIONS,
        payload: { isButtonDisabled: false }
      };

      const nextState = paginationReducer(newInitialState, newAction);

      expect(nextState).toEqual(expectedNewState);
    });
  });

  describe('#setTotalPagesPaginationAction', () => {
    it('should define setTotalPagesPaginationAction', () => {
      expect(action.setTotalPagesPaginationAction).toBeDefined();
    });

    it('should set total pages when setTotalPagesPaginationAction is triggered', () => {
      const newInitialState = {
        pagingOptions: { page: 1, limit: 10, totalPages: 0 },
        disabled: {
          previousPageButton: true,
          nextPageButton: false
        },
        queryParameter: '?page=1&limit=10'
      };
      const expectedNewState = {
        ...newInitialState,
        pagingOptions: { ...newInitialState.pagingOptions, totalPages: 50 }
      };
      const newAction = {
        type: constant.SET_TOTAL_PAGES_PAGING_OPTIONS,
        payload: { totalPages: 50 }
      };

      const nextState = paginationReducer(newInitialState, newAction);

      expect(nextState).toEqual(expectedNewState);
    });
  });
  describe('#reducer', () => {
    it('should initialize to initial state when next state is undefined', () => {
      expect(paginationReducer(undefined, {})).toEqual(initialState);
    });
  });
});
