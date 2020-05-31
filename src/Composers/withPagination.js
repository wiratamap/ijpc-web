import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import PaginationComponent from '../Components/Pagination/PaginationComponent';
import { action as paginationAction } from '../reducers/pagination/paginationReducer';
import handlers from './withPagination.handler';

export const withPagination = (WrappedComponent) => (props) => (
  <>
    <WrappedComponent
      {...props}
    />
    <PaginationComponent {...props} />
  </>
);

export const mapStateToProps = (state) => {
  const { paginationStore: { pagingOptions, disabled, queryParameter } } = state;

  const previousButtonDisabled = disabled.previousPageButton;
  const nextButtonDisabled = (disabled.nextPageButton)
    && ((pagingOptions.totalPages - 1) === pagingOptions.page);

  return {
    pagingOptions,
    previousButtonDisabled,
    nextButtonDisabled,
    queryParameter
  };
};

export const mapDispatchToProps = (dispatch) => ({
  onMovedPageToNextPage: (payload) => dispatch(paginationAction.nextPagePaginationAction(payload)),
  onMovedPageToPreviousPage: (payload) => dispatch(
    paginationAction.previousPagePaginationAction(payload)
  ),
  onAfterSetTotalPages: (payload) => (
    dispatch(paginationAction.setTotalPagesPaginationAction(payload))
  )
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
);

export default (WrappedComponent) => enhance(withPagination(WrappedComponent));
