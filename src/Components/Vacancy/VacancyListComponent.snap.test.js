import assertSnapshots from '../../utils/assertSnapshots';
import VacancyListComponent from './VacancyListComponent';
import VACANCIES from '../../fixtures/vacanciesData';

jest.mock('../../utils/numberFormat', () => ({
  currencyFormat: jest.fn().mockImplementation(() => 'IDR 0.00')
}))
  .mock('moment', () => () => ({
    fromNow: jest.fn().mockImplementation(() => '1 days ago'),
    format: jest.fn().mockImplementation(() => '1 Jan')
  }));

describe('VacancyListComponent snapshot', () => {
  const configurations = [
    {
      description: 'should render vacancy list component',
      props: {
        vacancies: VACANCIES
      }
    }
  ];
  assertSnapshots(VacancyListComponent, configurations);
});
