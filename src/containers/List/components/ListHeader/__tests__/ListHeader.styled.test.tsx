import renderer from 'react-test-renderer';
import 'jest-styled-components';

import theme from '../../../../../styles/theme';

import Styled from '../ListHeader.styled';

describe('ListHeader Styled Components', () => {
  describe('exported components', () => {
    it('should have a `Count` component', () => {
      expect(Styled.Count).toBeTruthy();
    });

    it('should have a `CreateButton` component', () => {
      expect(Styled.CreateButton).toBeTruthy();
    });

    it('should have a `Header` component', () => {
      expect(Styled.Header).toBeTruthy();
    });

    it('should have a `Title` component', () => {
      expect(Styled.Title).toBeTruthy();
    });
  });

  describe('Header', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Header />).toJSON();

      expect(component).toHaveStyleRule('display', 'flex');
      expect(component).toHaveStyleRule('align-items', 'center');
      expect(component).toHaveStyleRule('justify-content', 'space-between');
      expect(component).toHaveStyleRule('border-bottom', `1px solid ${theme.colors.black4}`);
      expect(component).toHaveStyleRule('padding', '20px 0');
    });
  });

  describe('Title', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Title />).toJSON();

      expect(component).toHaveStyleRule('margin', '0');
      expect(component).toHaveStyleRule('color', theme.colors.black5);
    });
  });

  describe('Count', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Count />).toJSON();

      expect(component).toHaveStyleRule('margin', '0 10px');
      expect(component).toHaveStyleRule('font-weight', 'normal');
    });
  });
});
