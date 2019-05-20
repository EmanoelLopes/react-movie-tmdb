/* eslint-disable */
import intl from 'react-intl-universal';
import en_US from 'lang/en-US';
import pt_BR from 'lang/pt-BR';
import es_ES from 'lang/es-ES';

const locales = {
  'en-US': en_US,
  'pt-BR': pt_BR,
  'es-ES': es_ES,
};

const fallbackLocale = 'en-US';

const currLocale = {
  currentLocale: (localStorage.getItem('current_language') !== null)
    ? localStorage.getItem('current_language')
    : fallbackLocale,
};

const locale = {
  init: () => intl.init({
    ...currLocale,
    locales,
    fallbackLocale,
  }),
};

export default locale;
