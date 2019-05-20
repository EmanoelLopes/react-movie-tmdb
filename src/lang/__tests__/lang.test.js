import intl from 'react-intl-universal';
import locale, {
  currLocale,
  locales,
  fallbackLocale,
} from 'lang';

const initLocale = {
  init: () => intl.init({
    ...currLocale,
    locales,
    fallbackLocale,
  }),
};

describe('Lang > Locales', () => {
  it('should return the correctly lang config', () => {
    expect(locale.init()).toEqual(initLocale.init());
  });
});
