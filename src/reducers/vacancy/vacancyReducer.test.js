import vacancyReducer, { action, constant, initialState } from './vacancyReducer';
import VACANCIES from '../../fixtures/vacanciesData';

describe('vacancyReducer', () => {
  describe('#setVacanciesAction', () => {
    it('should define setVacanciesAction', () => {
      expect(action.setVacanciesAction).toBeDefined();
    });

    it('should return action with SET_VACANCIES type', () => {
      expect(action.setVacanciesAction().type).toEqual(constant.SET_VACANCIES);
    });

    it('should set vacancies to new state', () => {
      const newAction = {
        type: constant.SET_VACANCIES,
        payload: VACANCIES
      };
      const expectedNextState = { vacancies: VACANCIES };

      const nextState = vacancyReducer(initialState, newAction);

      expect(nextState).toEqual(expectedNextState);
    });
  });

  describe('#reducer', () => {
    it('should initialize to initial state when next state is undefined', () => {
      expect(vacancyReducer(undefined, {})).toEqual(initialState);
    });
  });
});
