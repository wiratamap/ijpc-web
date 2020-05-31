import handler from './withPagination.handler';

describe('withPaginationHandler', () => {
  describe('#onSetTotalPages', () => {
    it('should call onAfterSetTotalPages with defined totalPages when onSetTotalPages is triggered', () => {
      const props = {
        onAfterSetTotalPages: jest.fn()
      };
      const totalPages = 10;

      handler.onSetTotalPages(props)(totalPages);

      expect(props.onAfterSetTotalPages).toHaveBeenCalledWith({ totalPages });
    });
  });

  describe('#onClickNextButton', () => {
    it('should call onMovedPageToNextPage with defined isButtonDisabled when onClickNextButton is triggered', () => {
      const props = {
        pagingOptions: { page: 0, totalPages: 10 },
        nextButtonDisabled: false,
        onMovedPageToNextPage: jest.fn()
      };
      const expectedCalledParameter = { isButtonDisabled: props.nextButtonDisabled };

      handler.onClickNextButton(props)();

      expect(props.onMovedPageToNextPage).toHaveBeenCalledWith(expectedCalledParameter);
    });

    it('should call onMovedPageToNextPage with isButtonDisabled true when the next page is last page', () => {
      const props = {
        pagingOptions: { page: 0, totalPages: 2 },
        nextButtonDisabled: false,
        onMovedPageToNextPage: jest.fn()
      };
      const expectedCalledParameter = { isButtonDisabled: true };

      handler.onClickNextButton(props)();

      expect(props.onMovedPageToNextPage).toHaveBeenCalledWith(expectedCalledParameter);
    });
  });

  describe('#onClickPreviousButton', () => {
    it('should call onMovedPageToPreviousPage with defined isButtonDisabled when onClickPreviousButton is triggered', () => {
      const props = {
        pagingOptions: { page: 0, totalPages: 2 },
        previousButtonDisabled: false,
        onMovedPageToPreviousPage: jest.fn()
      };
      const expectedCalledParameter = { isButtonDisabled: props.previousButtonDisabled };

      handler.onClickPreviousButton(props)();

      expect(props.onMovedPageToPreviousPage).toHaveBeenCalledWith(expectedCalledParameter);
    });

    it('should call onMovedPageToPreviousPage with with isButtonDisabled true when previous page is first page', () => {
      const props = {
        pagingOptions: { page: 1, totalPages: 2 },
        previousButtonDisabled: false,
        onMovedPageToPreviousPage: jest.fn()
      };
      const expectedCalledParameter = { isButtonDisabled: true };

      handler.onClickPreviousButton(props)();

      expect(props.onMovedPageToPreviousPage).toHaveBeenCalledWith(expectedCalledParameter);
    });
  });
});
