import { shallow } from 'enzyme';

import List from '../List';
import Styled from '../List.styled';

/**
 * Factory function that will create a `List` shallow wrapper.
 */
const setupShallow = () => (
  shallow(<List />)
);

describe('List', () => {
  it('should render a `Navbar` component', () => {
    const component = setupShallow();
    const navbar = component.find(Styled.Navbar);
    expect(navbar.length).toBe(1);
  });

  it('should render a `Container` component', () => {
    const component = setupShallow();
    const container = component.find(Styled.Container);
    expect(container.length).toBe(1);
  });
});
