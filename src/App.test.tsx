import { Switch, Route } from 'react-router-dom';
import { shallow } from 'enzyme';

import paths from './constants/paths';
import List from './containers/List/List';

import App from './App';

/**
 * Factory function that will create an `App` shallow wrapper.
 */
const setup = () => shallow(<App />);

describe('App', () => {
  it('should have a `switch` wrapper', () => {
    const component = setup();
    const switchWrapper = component.find(Switch);
    expect(switchWrapper.length).toBe(1);
  });
  
  describe('list route', () => {
    let listRoute: any;

    beforeAll(() => {
      const component = setup();
      listRoute = component.find(Route).find({ path: paths.list });
    });

    it('should render list route', () => {
      expect(listRoute.length).toBe(1);
    });

    it('should have the proper props', () => {
      const exact = listRoute.prop('exact');
      expect(exact).toBeTruthy();

      const strict = listRoute.prop('strict');
      expect(strict).toBeTruthy();

      const componentProp = listRoute.prop('component');
      expect(componentProp).toEqual(List);
    });
  });
});
