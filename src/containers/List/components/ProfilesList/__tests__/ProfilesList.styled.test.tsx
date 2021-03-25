import renderer from 'react-test-renderer';
import 'jest-styled-components';

import theme from '../../../../../styles/theme';

import Styled from '../ProfilesList.styled';

describe('ProfilesList Styled Components', () => {
  describe('exported components', () => {
    it('should have a `Error` component', () => {
      expect(Styled.Error).toBeTruthy();
    });

    it('should have a `Label` component', () => {
      expect(Styled.Label).toBeTruthy();
    });

    it('should have a `List` component', () => {
      expect(Styled.List).toBeTruthy();
    });

    it('should have a `ListItem` component', () => {
      expect(Styled.ListItem).toBeTruthy();
    });

    it('should have a `Text` component', () => {
      expect(Styled.Text).toBeTruthy();
    });

    it('should have a `Title` component', () => {
      expect(Styled.Title).toBeTruthy();
    });
  });

  describe('Error', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Error />).toJSON();

      expect(component).toHaveStyleRule('text-align', 'center');
      expect(component).toHaveStyleRule('font-size', '20px');
      expect(component).toHaveStyleRule('color', theme.colors.red);
    });
  });

  describe('List', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.List />).toJSON();

      expect(component).toHaveStyleRule('display', 'flex');
      expect(component).toHaveStyleRule('flex-direction', 'column');
      expect(component).toHaveStyleRule('margin', '0');
      expect(component).toHaveStyleRule('padding', '20px 0');
    });
  });

  describe('ListItem', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.ListItem />).toJSON();

      expect(component).toHaveStyleRule('box-shadow', '0px 4px 10px rgba(0,0,0,0.1)');
      expect(component).toHaveStyleRule('overflow', 'hidden');
      expect(component).toHaveStyleRule('border-radius', '4px');
      expect(component).toHaveStyleRule('padding', '20px');
      expect(component).toHaveStyleRule('list-style-type', 'none');
      expect(component).toHaveStyleRule('cursor', 'pointer');
      expect(component).toHaveStyleRule('transition', '0.4s');

      expect(component).toHaveStyleRule('box-shadow', '0 2px 8px rgba(0,0,0,0.05)', { modifier: ':hover'});
    });
  });

  describe('Title', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Title />).toJSON();

      expect(component).toHaveStyleRule('margin', '0 0 10px');
    });
  });

  describe('Text', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Text />).toJSON();

      expect(component).toHaveStyleRule('margin', '0');
    });
  });

  describe('Label', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Label />).toJSON();

      expect(component).toHaveStyleRule('font-weight', 'bold');
    });
  });
});
