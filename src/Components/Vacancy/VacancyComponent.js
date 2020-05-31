import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { currencyFormat } from '../../utils/numberFormat';
import placeholderImage from '../../assets/placeholder-image-768x576.png';

const VacancyComponent = ({ vacancy }) => (
  <div className="card">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row m-0">
          <div className="col-2">
            <img
              src={placeholderImage}
              className="img-thumbnail image-thumbnail-item"
              alt="1"
            />
          </div>
          <div className="col-6">
            <h4>{vacancy.subject}</h4>
            <p className="font-weight-light">{vacancy.employer}</p>
            <p className="font-weight-light text-small">
              {vacancy.location}
              {' '}
              ·
              {' '}
              {currencyFormat(vacancy.salaryCurrency, vacancy.approximateMinimumSalary)}
              {' '}
              -
              {' '}
              {currencyFormat(vacancy.salaryCurrency, vacancy.approximateMaximumSalary)}
              {' '}
              /
              {' '}
              {vacancy.payrollInterval.name}
            </p>
          </div>
          <div className="col-4">
            <div className="row justify-content-end">
              <p className="font-weight-light text-small">
                Posted
                {' '}
                { moment(vacancy.createdAt).fromNow() }
                {' '}
                · Apply before
                {' '}
                { moment(vacancy.submissionDeadline).format('D MMM') }
                .
              </p>
            </div>
            <div className="row justify-content-end">
              <button type="button" className="btn btn-outline-primary">Vacancy Detail</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

VacancyComponent.propTypes = {
  vacancy: PropTypes.shape({
    subject: PropTypes.string,
    employer: PropTypes.string,
    location: PropTypes.string,
    salaryCurrency: PropTypes.string,
    approximateMinimumSalary: PropTypes.number,
    approximateMaximumSalary: PropTypes.number,
    payrollInterval: PropTypes.shape({
      name: PropTypes.string
    }),
    createdAt: PropTypes.string.isRequired,
    submissionDeadline: PropTypes.string.isRequired
  })
};

VacancyComponent.defaultProps = {
  vacancy: {
    subject: '',
    employer: '',
    location: '',
    salaryCurrency: 'IDR',
    approximateMinimumSalary: 0,
    approximateMaximumSalary: 0,
    payrollInterval: {
      name: 'month'
    }
  }
};

export default VacancyComponent;
