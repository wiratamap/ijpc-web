import App from './App';
import assertSnapshots from './utils/assertSnapshots';

jest.mock('./Containers/Vacancy/VacancyContainer', () => 'VacancyContainer');

describe('App', () => {
  const configurations = [
    {
      description: 'should render vacancy list component with pagination component'
    }
  ];

  assertSnapshots(App, configurations);
});
