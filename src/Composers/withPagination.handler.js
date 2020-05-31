const onSetTotalPages = (props) => (totalPages) => {
  const { onAfterSetTotalPages } = props;
  onAfterSetTotalPages({ totalPages });
};

const _isNextPageIsLastPage = (pagingOptions) => (
  pagingOptions.page + 1 === (pagingOptions.totalPages - 1)
);

const onClickNextButton = (props) => () => {
  const { pagingOptions, nextButtonDisabled, onMovedPageToNextPage } = props;
  let isButtonDisabled = nextButtonDisabled;

  if (_isNextPageIsLastPage(pagingOptions)) {
    isButtonDisabled = true;
  }

  onMovedPageToNextPage({ isButtonDisabled });
};

const _isPreviousPageIsFirstPage = (pagingOptions) => pagingOptions.page - 1 === 0;

const onClickPreviousButton = (props) => () => {
  const { pagingOptions, previousButtonDisabled, onMovedPageToPreviousPage } = props;
  let isButtonDisabled = previousButtonDisabled;

  if (_isPreviousPageIsFirstPage(pagingOptions)) {
    isButtonDisabled = true;
  }

  onMovedPageToPreviousPage({ isButtonDisabled });
};

export default {
  onSetTotalPages,
  onClickNextButton,
  onClickPreviousButton
};
