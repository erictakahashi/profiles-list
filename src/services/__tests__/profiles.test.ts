import axios from '../api';
import { getProfiles } from '../profiles';

describe('profiles', () => {
  let getItem: any;
  let setItem: any;
  let get: any;

  const localDemoData = [
    { name: 'name1' },
    { name: 'name2' }
  ];

  const demoData = [
    ...localDemoData,
    { name: 'name3' }
  ];
  const getPromise = Promise.resolve({ data: demoData });

  beforeEach(() => {
    getItem = jest.spyOn(window.localStorage.__proto__, 'getItem');
    setItem = jest.spyOn(window.localStorage.__proto__, 'setItem');
    get = jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks()
  });

  describe('getProfiles', () => {
    it('should return the data from the local storage when there is a stored `profiles`', async () => {
      getItem.mockReturnValue(JSON.stringify(localDemoData));

      const profiles = await getProfiles();

      expect(getItem).toHaveBeenCalled();

      expect(JSON.stringify(profiles)).toBe(JSON.stringify(localDemoData));
    });

    it('should return the data from the api when there is not a stored `profiles`', async () => {
      getItem.mockReturnValue('');
      get.mockImplementation(() => getPromise);

      const profiles = await getProfiles();

      expect(getItem).toHaveBeenCalled();
      expect(get).toHaveBeenCalled();

      expect(setItem).toHaveBeenCalled();
      expect(setItem).toHaveBeenCalledWith('profiles', JSON.stringify(demoData));

      expect(JSON.stringify(profiles)).toBe(JSON.stringify(demoData));
    });
  });
});
