import renderer from 'react-test-renderer';
import 'jest-styled-components';

import theme from '../../../../styles/theme';

import Styled from '../Button.styled';

describe('Button Styled Components', () => {
  describe('exported components', () => {
    it('should have a `Button` component', () => {
      expect(Styled.Button).toBeTruthy();
    });
  });

  describe('Button', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Button />).toJSON();

      expect(component).toHaveStyleRule('border', '0');
      expect(component).toHaveStyleRule('border-radius', '30px');
      expect(component).toHaveStyleRule('padding', '15px');
      expect(component).toHaveStyleRule('background-color', theme.colors.primary);
      expect(component).toHaveStyleRule('font-size', '15px');
      expect(component).toHaveStyleRule('font-weight', 'bold');
      expect(component).toHaveStyleRule('color', theme.colors.black0);
      expect(component).toHaveStyleRule('cursor', 'pointer');

      expect(component).toHaveStyleRule('opacity', '0.7', { modifier: ':hover' });

      expect(component).toHaveStyleRule('background-color', theme.colors.black1, { modifier: ':disabled' });
      expect(component).toHaveStyleRule('color', theme.colors.black2, { modifier: ':disabled' });
    });
  });
});
