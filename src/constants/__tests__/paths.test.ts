import paths from '../paths';

describe('paths', () => {
  it('should have a `list` path', () => {
    expect(paths.list).toBe('/');
  });

  it('should have a `profile` path', () => {
    expect(paths.profile).toBe('/profile/:id');
  });
});
