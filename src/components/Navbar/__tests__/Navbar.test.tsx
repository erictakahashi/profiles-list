import { shallow } from 'enzyme';

import Navbar from '../Navbar';
import Styled from '../Navbar.styled';

/**
 * Factory function that will create a `Navbar` shallow wrapper.
 */
const setupShallow = () => shallow(<Navbar />);

describe('Navbar', () => {
  it('should render a `Wrapper` component', () => {
    const component = setupShallow();
    const wrapper = component.find(Styled.Wrapper);
    expect(wrapper.length).toBe(1);
  });

  it('should render a `Container` component', () => {
    const component = setupShallow();
    const container = component.find(Styled.Container);
    expect(container.length).toBe(1);
  });

  it('should render a `Title` component', () => {
    const component = setupShallow();
    const title = component.find(Styled.Title);
    expect(title.length).toBe(1);
  });
});
