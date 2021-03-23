import renderer from 'react-test-renderer';
import 'jest-styled-components';

import theme from '../../../styles/theme';

import Styled from '../Navbar.styled';

describe('Navbar Styled Components', () => {
  describe('exported components', () => {
    it('should have a `Container` component', () => {
      expect(Styled.Container).toBeTruthy();
    });

    it('should have a `Title` component', () => {
      expect(Styled.Title).toBeTruthy();
    });

    it('should have a `Wrapper` component', () => {
      expect(Styled.Wrapper).toBeTruthy();
    });
  });

  describe('Wrapper', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Wrapper />).toJSON();

      expect(component).toHaveStyleRule('background-color', theme.colors.primary);
      expect(component).toHaveStyleRule('color', theme.colors.black0);
    });
  });

  describe('Container', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Container />).toJSON();

      expect(component).toHaveStyleRule('padding-top', '20px');
      expect(component).toHaveStyleRule('padding-bottom', '20px');
    });
  });

  describe('Title', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Title />).toJSON();

      expect(component).toHaveStyleRule('grid-column', 'span 12');
      expect(component).toHaveStyleRule('margin', '0');
    });
  });
});
