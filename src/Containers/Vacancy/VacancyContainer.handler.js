const onFetchVacancies = (props) => async () => {
  const { fetchVacancies, onFetchedVacancies, onSetTotalPages } = props;
  const { data: vacancies } = await fetchVacancies();
  onFetchedVacancies(vacancies);
  onSetTotalPages(vacancies.totalPages);
};

export default {
  onFetchVacancies
};
