import { mapDispatchToProps, mapStateToProps } from './withPagination';
import { constant } from '../reducers/pagination/paginationReducer';

jest.mock('../Components/Pagination/PaginationComponent', () => 'PaginationComponent');

describe('withPagination', () => {
  describe('#mapStateToProps', () => {
    it('should set state from redux state', () => {
      const reduxState = {
        paginationStore: {
          pagingOptions: {
            page: 0,
            limit: 10,
            totalPages: 2
          },
          disabled: {
            previousPageButton: true,
            nextPageButton: false
          },
          queryParameter: '?page=0&limit=10'
        }
      };
      const expectedMappedProps = {
        pagingOptions: reduxState.paginationStore.pagingOptions,
        previousButtonDisabled: reduxState.paginationStore.disabled.previousPageButton,
        nextButtonDisabled: false,
        queryParameter: reduxState.paginationStore.queryParameter
      };

      const props = mapStateToProps(reduxState);

      expect(props).toEqual(expectedMappedProps);
    });

    it('should set nextButtonDisabled to true', () => {
      const reduxState = {
        paginationStore: {
          pagingOptions: {
            page: 1,
            limit: 10,
            totalPages: 2
          },
          disabled: {
            previousPageButton: true,
            nextPageButton: true
          },
          queryParameter: '?page=1&limit=10'
        }
      };
      const expectedMappedProps = {
        pagingOptions: reduxState.paginationStore.pagingOptions,
        previousButtonDisabled: reduxState.paginationStore.disabled.previousPageButton,
        nextButtonDisabled: true,
        queryParameter: reduxState.paginationStore.queryParameter
      };

      const props = mapStateToProps(reduxState);

      expect(props).toEqual(expectedMappedProps);
    });
  });

  describe('#mapDispatchToProps', () => {
    const dispatch = jest.fn();

    it('should dispatch next page action when onMovedPageToNextPage is triggered', () => {
      const payload = { isButtonDisabled: true };
      const expectedAction = { type: constant.NEXT_PAGE_PAGING_OPTIONS, payload };
      const props = mapDispatchToProps(dispatch);

      props.onMovedPageToNextPage(payload);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch next page action when onMovedPageToNextPage is triggered', () => {
      const payload = { isButtonDisabled: true };
      const expectedAction = { type: constant.NEXT_PAGE_PAGING_OPTIONS, payload };
      const props = mapDispatchToProps(dispatch);

      props.onMovedPageToNextPage(payload);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch previous page action when onMovedPageToPreviousPage is triggered', () => {
      const payload = { isButtonDisabled: true };
      const expectedAction = { type: constant.PREVIOUS_PAGE_PAGING_OPTIONS, payload };
      const props = mapDispatchToProps(dispatch);

      props.onMovedPageToPreviousPage(payload);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch set total page action when onAfterSetTotalPages is triggered', () => {
      const payload = { totalPages: 50 };
      const expectedAction = { type: constant.SET_TOTAL_PAGES_PAGING_OPTIONS, payload };
      const props = mapDispatchToProps(dispatch);

      props.onAfterSetTotalPages(payload);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
