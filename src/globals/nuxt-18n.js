import { i18nMessageDe, i18nMessageEn } from './locales';
export const DEFAULT_LANG = 'en';
export default {
  fallbackLocale: DEFAULT_LANG,
  messages: {
    en: i18nMessageEn,
    de: i18nMessageDe
  }
};
