import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import VacancyContainer from './Containers/Vacancy/VacancyContainer';

const App = () => (
  <div className="container-fluid min-vh-100 bg-main">
    <VacancyContainer />
  </div>
);

export default App;
