import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    fallbackLocale: 'de',
    locale: store.state.locale,
    messages: {
      // en: {},
      // de: {}
      'de': require('~/locales/global/de.json'),
      'en': require('~/locales/global/en.json')
    }
  });

  app.i18n.path = (link) => {
    // if (app.i18n.locale === app.i18n.fallbackLocale) {
    //   return `/${link}`;
    // }

    return `/${app.i18n.locale}/${link}`;
  };
};
