import { shallow } from 'enzyme';

import Button from '../Button';
import Styled from '../Button.styled';

/**
 * Factory function that will create a `Button` shallow wrapper.
 * @param {object} props Component props specific to this setup.
 */
const setupShallow = (props?: object) => shallow(<Button {...props} />);

describe('Button', () => {
  it('should render a `Button` component', () => {
    const component = setupShallow();
    const button = component.find(Styled.Button);
    expect(button.length).toBe(1);
  });

  it('should render the proper `children`', () => {
    const children = 'Content';
    const component = setupShallow({ children });
    const button = component.find(Styled.Button);
    const childrenProp = button.prop('children');
    expect(childrenProp).toEqual(children);
  });

  it('should set the any button prop as expected', () => {
    const component = setupShallow({ disabled: true });
    const button = component.find(Styled.Button);
    const disabled = button.prop('disabled');
    expect(disabled).toBeTruthy();
  });
});
