import { i18nMessageDe, i18nMessageEn } from './src/globals/locales';

export const DEFAULT_LOCALE = 'en';

export default {
  legacy: false,
  locale: DEFAULT_LOCALE,
  messages: {
    en: i18nMessageEn,
    de: i18nMessageDe
  }
};
