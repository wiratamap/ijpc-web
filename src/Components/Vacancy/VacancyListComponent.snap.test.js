import assertSnapshots from '../../utils/assertSnapshots';
import VacancyListComponent from './VacancyListComponent';
import VACANCIES from '../../fixtures/vacanciesData';

jest.mock('../../utils/numberFormat', () => ({
  currencyFormat: () => 'IDR 0.00'
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
