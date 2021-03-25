import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Styled from '../List.styled';

describe('List Styled Components', () => {
  describe('exported components', () => {
    it('should have a `Container` component', () => {
      expect(Styled.Container).toBeTruthy();
    });

    it('should have a `Header` component', () => {
      expect(Styled.Header).toBeTruthy();
    });

    it('should have a `List` component', () => {
      expect(Styled.List).toBeTruthy();
    });

    it('should have a `Navbar` component', () => {
      expect(Styled.Navbar).toBeTruthy();
    });
  });

  describe('Container', () => {
    it('should have the expected style rules', () => {
      const component = renderer.create(<Styled.Container />).toJSON();

      expect(component).toHaveStyleRule('padding-top', '30px');
      expect(component).toHaveStyleRule('padding-bottom', '30px');
    });
  });
});
