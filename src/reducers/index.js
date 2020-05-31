import { combineReducers } from 'redux';
import vacancyReducer from './vacancy/vacancyReducer';
import paginationReducer from './pagination/paginationReducer';

export default combineReducers({
  vacanciesStore: vacancyReducer,
  paginationStore: paginationReducer
});
