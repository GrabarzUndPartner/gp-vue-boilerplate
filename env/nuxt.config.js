// process.env.DEBUG = '*';
const path = require('path');
const webpackPlugins = require('./webpack/plugins');
const webpackModules = require('./webpack/modules');

module.exports = {
  dev: process.env.NODE_ENV === 'development',
  srcDir: 'src/',
  css: [],
  build: {
    analyze: false,
    // analyze: {
    //   analyzerMode: 'static',
    //   reportFilename: path.resolve('reports/webpack-bundle-analyzer.html'),
    //   openAnalyzer: false
    // },

    extend(config) {
      webpackPlugins(config.plugins);
      webpackModules(config.module);
      return config;
    }
  },

  router: {
    base: '/'
  },

  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US'
          },
          {
            code: 'de',
            iso: 'de-DE'
          }
        ],
        defaultLocale: 'de',
        strategy: 'prefix_except_default',
        seo: true,
        vueI18n: {
          fallbackLocale: 'de',
          messages: {
            en: require(path.resolve('src/globals/locales/en.json')),
            de: require(path.resolve('src/globals/locales/de.json'))
          }
        },
        vueI18nLoader: false
      }
    ],
    [
      '@nuxtjs/pwa',
      {
        icon: {
          iconSrc: 'src/static/favicon.png',
          sizes: [16, 120, 144, 152, 192, 384, 512]
        },
        meta: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          mobileApp: true,
          mobileAppIOS: true,
          appleStatusBarStyle: 'default',
          favicon: true,
          name: 'TITLE',
          author: '',
          description: '',
          theme_color: 'black',
          lang: 'de',
          ogType: 'website',
          ogSiteName: 'ogSITE_NAME',
          ogTitle: 'ogTITLE',
          ogDescription: 'ogDESCRIPTION',
          ogHost: undefined,
          ogImage: true
        },
        manifest: {
          name: 'MANIFEST FOR APP',
          lang: 'de'
        }
      }
    ]
  ],

  head: {
    meta: [],
    link: []
  }
};
