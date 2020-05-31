import React from 'react';
import PropTypes from 'prop-types';

import VacancyComponent from './VacancyComponent';

const VacancyListComponent = ({ vacancies }) => (
  vacancies.content.map((vacancy) => (
    <VacancyComponent key={vacancy.id} vacancy={vacancy} />
  ))
);

VacancyListComponent.propTypes = {
  vacancies: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.any)
  })
};

VacancyListComponent.defaultProps = {
  vacancies: {
    content: []
  }
};

export default VacancyListComponent;
