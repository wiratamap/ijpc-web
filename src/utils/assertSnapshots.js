import React from 'react';
import renderer from 'react-test-renderer';

/**
 * @param Component - (Component) Component that needs to be test.
 * @param testConfiguration - (object) object of props and test description
 */
const assertSnapshot = (Component, testConfiguration) => {
  const { props, description } = testConfiguration;

  describe('#render', () => {
    it(description, () => {
      const component = renderer.create(<Component {...props} />).toJSON();

      expect(component).toMatchSnapshot();
    });
  });
};

const assertSnapshots = (Component, testConfigurations) => {
  testConfigurations.forEach((testConfiguration) => assertSnapshot(Component, testConfiguration));
};

export default assertSnapshots;
