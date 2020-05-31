import handler from './VacancyContainer.handler';
import { VACANCIES } from '../../fixtures/vacanciesData';

jest.mock('axios');

describe('VacancyContainerHandler', () => {
  describe('#onFetchVacancies', () => {
    it('should set vacancies to new vacancies when onFetchVacancies is triggered', async () => {
      const vacancies = { ...VACANCIES, totalPages: 10 };
      const props = {
        fetchVacancies: jest.fn().mockImplementation(() => ({ data: vacancies })),
        onFetchedVacancies: jest.fn(),
        onSetTotalPages: jest.fn()
      };

      await handler.onFetchVacancies(props)();

      expect(props.onFetchedVacancies).toHaveBeenCalledWith(vacancies);
      expect(props.onSetTotalPages).toHaveBeenCalledWith(vacancies.totalPages);
    });
  });
});
