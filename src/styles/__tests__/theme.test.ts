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

  describe('responsive', () => {
    it('should have a `isMobile` responsive variable', () => {
      expect(theme.responsive.isMobile).toBe('@media only screen and (max-width: 768px)');
    });

    it('should have a `isTablet` responsive variable', () => {
      expect(theme.responsive.isTablet).toBe('@media only screen and (min-width: 768px) and (max-width: 992px)');
    });

    it('should have a `isDesktop` responsive variable', () => {
      expect(theme.responsive.isDesktop).toBe('@media only screen and (min-width: 992px)');
    });
  });
});
