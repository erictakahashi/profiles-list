import { shallow } from 'enzyme';

import ListHeader from '../ListHeader';
import Styled from '../ListHeader.styled';

/**
 * Factory function that will create a `ListHeader` shallow wrapper.
 * @param {object} props Component props specific to this setup.
 */
const setupShallow = (props?: object) => shallow(<ListHeader {...props} />);

describe('ListHeader', () => {
  it('should render a `Header` component', () => {
    const component = setupShallow();
    const header = component.find(Styled.Header);
    expect(header.length).toBe(1);
  });

  it('should render a `Title` component', () => {
    const component = setupShallow();
    const title = component.find(Styled.Title);
    expect(title.length).toBe(1);
  });

  it('should render a `Count` component', () => {
    const component = setupShallow();
    const count = component.find(Styled.Count);
    expect(count.length).toBe(1);
  });

  it('should set the `count` prop as expected', () => {
    const totalCount = 2;
    const component = setupShallow({ count: totalCount });
    const count = component.find(Styled.Count);
    const countChildren = count.prop('children');
    expect(countChildren).toEqual(totalCount);
  });

  it('should render a `CreateButton` component', () => {
    const component = setupShallow();
    const createButton = component.find(Styled.CreateButton);
    expect(createButton.length).toBe(1);
  });
});
