import React from 'react';
import {
  compose, lifecycle, withHandlers, withProps
} from 'recompose';
import axios from 'axios';
import { connect } from 'react-redux';

import VacancyListComponent from '../../Components/Vacancy/VacancyListComponent';
import handlers from './VacancyContainer.handler';
import { action as vacanciesAction } from '../../reducers/vacancy/vacancyReducer';
import api from '../../utils/configuration';
import withPagination from '../../Composers/withPagination';

export const VacancyContainer = (props) => (<VacancyListComponent {...props} />);

export const mapStateToProps = (state) => ({
  vacancies: state.vacanciesStore.vacancies
});

export const mapDispatchToProps = (dispatch) => ({
  onFetchedVacancies: (payload) => dispatch(vacanciesAction.setVacanciesAction(payload))
});

export const mapOwnProps = (props) => ({
  fetchVacancies: async () => axios.get(`${api.vacancies}${props.queryParameter}`)
});

export const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.onFetchVacancies();
  },
  componentDidUpdate(prevProps) {
    if (prevProps.queryParameter !== this.props.queryParameter) {
      this.props.onFetchVacancies();
    }
  }
});

const enhance = compose(
  withPagination,
  connect(mapStateToProps, mapDispatchToProps),
  withProps(mapOwnProps),
  withHandlers(handlers),
  withLifecycle
);

export default enhance(VacancyContainer);
