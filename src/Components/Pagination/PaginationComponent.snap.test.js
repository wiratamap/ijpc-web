import assertSnapshots from '../../utils/assertSnapshots';
import PaginationComponent from './PaginationComponent';

describe('PaginationComponent', () => {
  const configurations = [
    {
      props: {
        previousButtonDisabled: true,
        nextButtonDisabled: true,
        onClickPreviousButton: jest.fn(),
        onClickNextButton: jest.fn()
      },
      description: 'should render pagination component with defined props'
    }
  ];

  assertSnapshots(PaginationComponent, configurations);
});
