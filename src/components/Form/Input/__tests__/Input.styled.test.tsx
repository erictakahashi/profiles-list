import renderer from 'react-test-renderer';
import 'jest-styled-components';

import theme from '../../../../styles/theme';

import Styled from '../Input.styled';

describe('Profile Styled Components', () => {
  describe('exported components', () => {
    it('should have a `Label` component', () => {
      expect(Styled.Label).toBeTruthy();
    });

    it('should have a `Input` component', () => {
      expect(Styled.Input).toBeTruthy();
    });

    it('should have a `Wrapper` component', () => {
      expect(Styled.Wrapper).toBeTruthy();
    });
  });

  describe('Wrapper', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Wrapper />).toJSON();

      expect(component).toHaveStyleRule('display', 'flex');
      expect(component).toHaveStyleRule('flex-direction', 'column');
    });
  });

  describe('Label', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Label />).toJSON();

      expect(component).toHaveStyleRule('font-size', '15px');
      expect(component).toHaveStyleRule('color', theme.colors.black3);
    });
  });

  describe('Input', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Input />).toJSON();

      expect(component).toHaveStyleRule('outline', 'none');
      expect(component).toHaveStyleRule('border', '0');
      expect(component).toHaveStyleRule('border-bottom', `1px solid ${theme.colors.black3}`);
      expect(component).toHaveStyleRule('padding', '10px 0');
      expect(component).toHaveStyleRule('font-size', '20px');
      expect(component).toHaveStyleRule('color', theme.colors.black3);

      expect(component).toHaveStyleRule('border-bottom', `1px solid ${theme.colors.black5}`, { modifier: ':focus' });
      expect(component).toHaveStyleRule('color', theme.colors.black5, { modifier: ':focus' });
      });
  });
});
