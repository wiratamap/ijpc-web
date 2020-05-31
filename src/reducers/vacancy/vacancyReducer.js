import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

const SET_VACANCIES = 'SET/VACANCIES';

export const constant = {
  SET_VACANCIES
};

const setVacanciesAction = createAction(SET_VACANCIES);

export const action = {
  setVacanciesAction
};

export const initialState = {
  vacancies: {
    content: []
  }
};

const setVacanciesHandler = (state, { payload }) => ({
  ...state,
  vacancies: payload
});

export default typeToReducer({
  [SET_VACANCIES]: setVacanciesHandler
}, initialState);
