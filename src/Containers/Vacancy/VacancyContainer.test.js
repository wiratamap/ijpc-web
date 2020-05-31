import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import flushPromises from 'flush-promises';

import { compose, withProps } from 'recompose';
import {
  mapDispatchToProps,
  mapOwnProps, mapStateToProps,
  VacancyContainer,
  withLifecycle
} from './VacancyContainer';
import VACANCIES from '../../fixtures/vacanciesData';
import api from '../../utils/configuration';

jest.mock('axios');

describe('VacancyContainer', () => {
  describe('#render', () => {
    it('should render Vacancy Container', () => {
      const component = shallow(<VacancyContainer />);
      const vacancyListComponent = component.find('VacancyListComponent');

      expect(vacancyListComponent).toHaveLength(1);
    });
  });

  describe('#withLifecycle', () => {
    describe('#componentDidMount', () => {
      it('should call onFetchVacancies when component is mount', async () => {
        const component = () => <VacancyContainer />;
        const onFetchVacancies = jest.fn();
        const enhance = compose(
          withProps({ onFetchVacancies }),
          withLifecycle
        );
        shallow(enhance(component)());

        await flushPromises();

        expect(onFetchVacancies).toHaveBeenCalledTimes(1);
      });
    });

    describe('#componentDidUpdate', () => {
      it('should call onFetchVacancies when queryParameter is updated', async () => {
        const component = () => <VacancyContainer />;
        const onFetchVacancies = jest.fn();
        const enhance = compose(
          withProps({ onFetchVacancies, queryParameter: '?page=0&limit=10' }),
          withLifecycle
        );
        const composedComponent = shallow(enhance(component)());

        composedComponent.setProps({ ...onFetchVacancies, queryParameter: '?page=1&limit=10' });
        await flushPromises();

        expect(onFetchVacancies).toHaveBeenCalledTimes(2);
      });

      it('should not call onFetchVacancies when queryParameter is not updated', async () => {
        const component = () => <VacancyContainer />;
        const onFetchVacancies = jest.fn();
        const enhance = compose(
          withProps({ onFetchVacancies, queryParameter: '?page=0&limit=10' }),
          withLifecycle
        );
        const composedComponent = shallow(enhance(component)());

        composedComponent.setProps({ ...onFetchVacancies, queryParameter: '?page=0&limit=10' });
        await flushPromises();

        expect(onFetchVacancies).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('#mapStateToProps', () => {
    it('should set props vacancies from redux store', () => {
      const reduxState = {
        vacanciesStore: {
          vacancies: VACANCIES
        }
      };
      const expectedReceivedProps = {
        vacancies: reduxState.vacanciesStore.vacancies
      };

      const props = mapStateToProps(reduxState);

      expect(props).toEqual(expectedReceivedProps);
    });
  });

  describe('#mapDispatchToProps', () => {
    const dispatch = jest.fn();

    describe('#onFetchVacancies', () => {
      it('should dispatch set vacancies action when onFetchVacancies is triggered', () => {
        const payload = VACANCIES;
        const expectedAction = { type: 'SET/VACANCIES', payload };
        const props = mapDispatchToProps(dispatch);

        props.onFetchedVacancies(payload);

        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    });
  });

  describe('#mapOwnProps', () => {
    beforeEach(() => {
      axios.get.mockImplementation(() => ({ data: VACANCIES }));
    });

    it('should call axios get when fetchVacancies is triggered', async () => {
      const parentProps = { queryParameter: '?page=0&limit=10' };
      const ownProps = mapOwnProps(parentProps);

      await ownProps.fetchVacancies();

      expect(axios.get).toHaveBeenCalledWith(`${api.vacancies}${parentProps.queryParameter}`);
    });
  });
});
