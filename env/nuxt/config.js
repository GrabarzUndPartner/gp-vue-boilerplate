const webpackPlugins = require('./config/webpack/plugins');
const webpackModules = require('./config/webpack/modules');
const deepmerge = require('deepmerge');
// const i18nExtensions = require('vue-i18n-extensions');

process.env.DEBUG = 'nuxt:*';
module.exports = {
  dev: (process.env.NODE_ENV === 'development'),
  srcDir: 'src/',

  build: {
    analyze: false,

    // vendor: ['vue-i18n'],

    extend (config, { isClient }) {
      webpackPlugins(config.plugins, this.options.srcDir);
      webpackModules(config.module);
    }
  },

  plugins: [
    '~/plugins/i18n.js'
  ],

  modules: [],

  router: {
    middleware: 'i18n'
  },

  generate: {
    routes: ['/en', '/en/about', '/de', '/de/about']
  },

  head: deepmerge.all([require('./config/global/favicon.json'), {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ],
    link: []
  }])

  // render: {
  //   // confiture `render`
  //   // see Nuxt.js docs: https://nuxtjs.org/api/configuration-render#bundleRenderer
  //   bundleRenderer: {
  //     directives: {
  //       t: i18nExtensions.directive
  //     }
  //   }
  // }
};
