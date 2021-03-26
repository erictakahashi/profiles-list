import * as ReactRouterDom from 'react-router-dom';
import { shallow } from 'enzyme';

import paths from '../../../../../constants/paths';

import ProfilesList, { ListItem } from '../ProfilesList';
import Styled from '../ProfilesList.styled';

/**
 * Factory function that will create a `ProfilesList` shallow wrapper.
 * @param {object} props Component props specific to this setup.
 */
const setupShallow = (props?: object) => shallow(<ProfilesList {...props} />);

/**
 * Factory function that will create a `ListItem` shallow wrapper.
 * @param {object} props Component props specific to this setup.
 */
const setupListItem = (props?: object) => shallow(<ListItem {...props} />);

const mockPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => {
    const push = () => mockPush();
    return { push };
  },
}));

describe('ProfilesList', () => {
  const profiles = [
    { cpf: 'cpfA', email: 'emailA', name: 'nameA', phone: 'phoneA' },
    { cpf: 'cpfB', email: 'emailB', name: 'nameB', phone: 'phoneB' }
  ];

  afterAll(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('without `profiles`', () => {
    it('should render an `Error` component', () => {
      const component = setupShallow({ profiles: [] });
      const error = component.find(Styled.Error);
      expect(error.length).toBe(1);
    });

    it('should not render a `List` component', () => {
      const component = setupShallow({ profiles: [] });
      const list = component.find(Styled.List);
      expect(list.length).toBe(0);
    });
  });

  describe('with `profiles`', () => {
    it('should not render an `Error` component', () => {
      const component = setupShallow({ profiles });
      const error = component.find(Styled.Error);
      expect(error.length).toBe(0);
    });

    it('should render a `List` component', () => {
      const component = setupShallow({ profiles });
      const list = component.find(Styled.List);
      expect(list.length).toBe(1);
    });

    it('should render the expected count of `ListItem` components', () => {
      const component = setupShallow({ profiles });
      const listItems = component.find(ListItem);
      expect(listItems.length).toBe(profiles.length);
    });
  });

  describe('ListItem', () => {
    const profile = profiles[0];

    it('should render a `ListItem` component', () => {
      const component = setupListItem({ profile });
      const listItem = component.find(Styled.ListItem);
      expect(listItem.length).toBe(1);
    });

    it('should render a `Title` component', () => {
      const component = setupListItem({ profile });
      const title = component.find(Styled.Title);
      expect(title.length).toBe(1);
    });

    it('should render the profile `name` as the `Title` children', () => {
      const component = setupListItem({ profile });
      const title = component.find(Styled.Title);
      const titleChildren = title.prop('children');
      expect(titleChildren).toBe(profile.name);
    });

    it('should render `Text` components for the profile `email`, `cpf`, and `phone`', () => {
      const component = setupListItem({ profile });
      const text = component.find(Styled.Text);
      expect(text.length).toBe(3);
    });

    it('should render `Label` components for the profile `email`, `cpf`, and `phone`', () => {
      const component = setupListItem({ profile });
      const label = component.find(Styled.Label);
      expect(label.length).toBe(3);
    });

    describe('onClick', () => {
      it('should call history `push`', () => {
        const component = setupListItem({ profile });
        const listItem = component.find(Styled.ListItem);
        const firstListItem = listItem.at(0);
        firstListItem.simulate('click');
        expect(mockPush).toHaveBeenCalled();
      });
    });
  });
});
