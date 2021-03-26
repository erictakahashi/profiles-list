import renderer from 'react-test-renderer';
import 'jest-styled-components';

import theme from '../../../styles/theme';

import Styled from '../Profile.styled';

describe('Profile Styled Components', () => {
  const mobileMedia = theme.responsive.isMobile;
  const mobileMediaQuery = mobileMedia.replace('@media ', '');

  describe('exported components', () => {
    it('should have a `ActionBar` component', () => {
      expect(Styled.ActionBar).toBeTruthy();
    });

    it('should have a `Container` component', () => {
      expect(Styled.Container).toBeTruthy();
    });

    it('should have a `Form` component', () => {
      expect(Styled.Form).toBeTruthy();
    });

    it('should have a `Input` component', () => {
      expect(Styled.Input).toBeTruthy();
    });

    it('should have a `Navbar` component', () => {
      expect(Styled.Navbar).toBeTruthy();
    });

    it('should have a `SaveButton` component', () => {
      expect(Styled.SaveButton).toBeTruthy();
    });
  });

  describe('Container', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Container />).toJSON();

      expect(component).toHaveStyleRule('padding-top', '30px');
      expect(component).toHaveStyleRule('padding-bottom', '30px');
    });
  });

  describe('Input', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Input />).toJSON();

      expect(component).toHaveStyleRule('grid-column', 'span 6');
      expect(component).toHaveStyleRule('margin-bottom', '10px');

      expect(component).toHaveStyleRule('grid-column', 'span 12', { media: mobileMediaQuery });
    });
  });

  describe('ActionBar', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.ActionBar />).toJSON();

      expect(component).toHaveStyleRule('grid-column', 'span 12');
      expect(component).toHaveStyleRule('display', 'flex');
      expect(component).toHaveStyleRule('justify-content', 'flex-end');

      expect(component).toHaveStyleRule('justify-content', 'center', { media: mobileMediaQuery });
    });
  });
});
