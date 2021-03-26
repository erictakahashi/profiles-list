import { shallow } from 'enzyme';

import Profile from '../Profile';
import Styled from '../Profile.styled';

/**
 * Factory function that will create a `Profile` shallow wrapper.
 */
const setupShallow = () => shallow(<Profile />);

describe('ProfilesList', () => {
  const profile = { cpf: 'cpfA', email: 'emailA', name: 'nameA', phone: 'phoneA' };

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

  it('should render a `Form` component', () => {
    const component = setupShallow();
    const form = component.find(Styled.Form);
    expect(form.length).toBe(1);
  });

  it('should render `Input` components for name, email, cpf, and phone', () => {
    const component = setupShallow();
    const inputs = component.find(Styled.Input);
    expect(inputs.length).toBe(4);
  });

  it('should render an `ActionBar` component', () => {
    const component = setupShallow();
    const actionBar = component.find(Styled.ActionBar);
    expect(actionBar.length).toBe(1);
  });

  it('should render an `SaveButton` component', () => {
    const component = setupShallow();
    const saveButton = component.find(Styled.SaveButton);
    expect(saveButton.length).toBe(1);
  });
});
