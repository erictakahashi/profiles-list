import theme from '../theme';

describe('theme', () => {
  describe('colors', () => {
    it('should have theme `colors`', () => {
      expect(theme.colors).toBeTruthy();
    });

    it('should have a `primary` color', () => {
      expect(theme.colors.primary).toBe('#00c8b3');
    });

    it('should have a `black5` color', () => {
      expect(theme.colors.black5).toBe('#000000');
    });

    it('should have a `black4` color', () => {
      expect(theme.colors.black4).toBe('#efeeed');
    });

    it('should have a `black3` color', () => {
      expect(theme.colors.black3).toBe('#333333');
    });

    it('should have a `black2` color', () => {
      expect(theme.colors.black2).toBe('#dddcdc');
    });

    it('should have a `black1` color', () => {
      expect(theme.colors.black1).toBe('#f6f6f6');
    });

    it('should have a `black0` color', () => {
      expect(theme.colors.black0).toBe('#ffffff');
    });

    it('should have a `red` color', () => {
      expect(theme.colors.red).toBe('#eb4a46');
    });
  });
});
