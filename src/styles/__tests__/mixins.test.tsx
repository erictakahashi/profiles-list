import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import mixins from '../mixins';

describe('mixins', () => {
  it('should export a grid mixin', () => {
    expect(mixins.grid).toBeTruthy();
  });

  describe('grid mixin', () => {
    const Grid = styled.div`
      ${mixins.grid}
    `;

    it('should have the proper style rules', () => {
      const component = renderer.create(<Grid />).toJSON();

      expect(component).toHaveStyleRule('position', 'relative');
      expect(component).toHaveStyleRule('display', 'grid');
      expect(component).toHaveStyleRule('grid-template-columns', 'repeat(12,1fr)');
      expect(component).toHaveStyleRule('grid-column-gap', '20px');
      expect(component).toHaveStyleRule('grid-row-gap', '20px');
      expect(component).toHaveStyleRule('justify-items', 'stretch');
      expect(component).toHaveStyleRule('box-sizing', 'border-box');
      expect(component).toHaveStyleRule('margin-right', 'auto');
      expect(component).toHaveStyleRule('margin-left', 'auto');
      expect(component).toHaveStyleRule('padding-right', '30px');
      expect(component).toHaveStyleRule('padding-left', '30px');
      expect(component).toHaveStyleRule('max-width', '1000px');
      expect(component).toHaveStyleRule('width', '100%');
    });
  });
});
