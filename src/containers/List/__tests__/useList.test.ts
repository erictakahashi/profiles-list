import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import * as ServicesProfiles from '../../../services/profiles';

import { useList } from '../useList';

/**
 * Factory function that will render the `useList` hook.
 */
const buildHook = () => renderHook(useList);

describe('useList Hook', () => {
  let setState: any;
  let useState: any;

  const profiles = [{ name: 'name' }];

  beforeAll(() => {
    useState = jest.spyOn(React, 'useState');
  });

  beforeEach(() => {
    setState = jest.fn();
    useState.mockImplementation((init = []) => [init, setState]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call `getProfiles` and `setState` when the hook mounts', async () => {
    const getPromise = () => Promise.resolve(profiles);
    const getProfiles = jest.spyOn(ServicesProfiles, 'getProfiles');
    getProfiles.mockImplementation(getPromise);

    buildHook();

    await getPromise();

    expect(getProfiles).toHaveBeenCalled();
    expect(setState).toHaveBeenCalledWith(profiles);
  });

  it('should return `profiles` from state', async () => {
    useState.mockImplementation(() => [profiles, setState]);

    const { result: { current } } = buildHook();

    expect(current.profiles).toEqual(profiles);
  });
});
