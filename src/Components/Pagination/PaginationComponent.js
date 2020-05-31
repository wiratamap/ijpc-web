import React from 'react';
import PropTypes from 'prop-types';

const PaginationComponent = ({
  previousButtonDisabled, nextButtonDisabled, onClickPreviousButton, onClickNextButton
}) => (
  <nav aria-label="Pagination">
    <ul className="pagination pagination-lg justify-content-end">
      <li className="page-item">
        <button
          type="button"
          className="page-link"
          aria-label="Previous"
          disabled={previousButtonDisabled}
          onClick={onClickPreviousButton}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li className="page-item">
        <button
          type="button"
          className="page-link"
          aria-label="Next"
          disabled={nextButtonDisabled}
          onClick={onClickNextButton}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
);

PaginationComponent.propTypes = {
  previousButtonDisabled: PropTypes.bool,
  nextButtonDisabled: PropTypes.bool,
  onClickPreviousButton: PropTypes.func,
  onClickNextButton: PropTypes.func
};

PaginationComponent.defaultProps = {
  previousButtonDisabled: true,
  nextButtonDisabled: true,
  onClickPreviousButton: Function,
  onClickNextButton: Function
};

export default PaginationComponent;
