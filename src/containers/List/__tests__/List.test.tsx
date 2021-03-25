import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';
import Styled from '../List.styled';
import * as UseList from '../useList';

/**
 * Factory function that will create a `List` shallow wrapper.
 */
const setupShallow = () => shallow(<List />);

describe('List', () => {
  let useList: any;

  const profiles = [{ name: 'name1' }];

  beforeAll(() => {
    useList = jest.spyOn(UseList, 'useList');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a `Navbar` component', () => {
    const component = setupShallow();
    const navbar = component.find(Styled.Navbar);
    expect(navbar.length).toBe(1);
  });

  it('should render a `Container` component', () => {
    const component = setupShallow();
    const container = component.find(Styled.Container);
    expect(container.length).toBe(1);
  });

  describe('Header', () => {
    it('should render a `Header` component', () => {
      const component = setupShallow();
      const header = component.find(Styled.Header);
      expect(header.length).toBe(1);
    });

    it('should have the `count` prop according to the `profiles` from `useList` hook', () => {
      useList.mockReturnValue({ profiles });

      const component = setupShallow();
      const header = component.find(Styled.Header);
      const count = header.prop('count');
      expect(count).toBe(profiles.length);
    });
  });

  describe('List', () => {
    it('should render a `List` component', () => {
      const component = setupShallow();
      const list = component.find(Styled.List);
      expect(list.length).toBe(1);
    });

    it('should have the `profiles` prop according to the `profiles` from `useList` hook', () => {
      useList.mockReturnValue({ profiles });

      const component = setupShallow();
      const list = component.find(Styled.List);
      const profilesProp = list.prop('profiles');
      expect(profilesProp).toEqual(profiles);
    });
  });
});
