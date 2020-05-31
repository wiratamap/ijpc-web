import { VACANCIES } from '../../fixtures/vacanciesData';
import assertSnapshots from '../../utils/assertSnapshots';
import VacancyComponent from './VacancyComponent';

jest.mock('../../utils/numberFormat', () => ({
  currencyFormat: () => 'IDR 0.00'
}));

describe('VacancyComponent', () => {
  const configurations = [
    {
      props: {
        vacancy: {
          subject: '',
          employer: '',
          location: '',
          salaryCurrency: 'IDR',
          approximateMinimumSalary: 0,
          approximateMaximumSalary: 0,
          payrollInterval: {
            name: 'month'
          },
          createdAt: VACANCIES.content[0].createdAt,
          submissionDeadline: VACANCIES.content[0].submissionDeadline
        }
      },
      description: 'should render VacancyComponent with defined posted date, deadline, and another default props'
    },
    {
      props: {
        vacancy: {
          subject: VACANCIES.content[0].subject,
          employer: VACANCIES.content[0].employer,
          location: VACANCIES.content[0].location,
          salaryCurrency: VACANCIES.content[0].salaryCurrency,
          approximateMinimumSalary: VACANCIES.content[0].approximateMinimumSalary,
          approximateMaximumSalary: VACANCIES.content[0].approximateMaximumSalary,
          payrollInterval: VACANCIES.content[0].payrollInterval,
          createdAt: VACANCIES.content[0].createdAt,
          submissionDeadline: VACANCIES.content[0].submissionDeadline
        }
      },
      description: 'should render VacancyComponent with proper defined props'
    }
  ];

  assertSnapshots(VacancyComponent, configurations);
});
