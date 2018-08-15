const webpackPlugins = require('./config/webpack/plugins');
const webpackModules = require('./config/webpack/modules');
const deepmerge = require('deepmerge');
// const i18nExtensions = require('vue-i18n-extensions');

process.env.DEBUG = 'nuxt:*';
module.exports = {
  dev: process.env.NODE_ENV === 'development',
  srcDir: 'src/',
  css: [],
  build: {
    analyze: {
      analyzerMode: 'static',
      reportFilename: '../../reports/webpack-bundle-analyzer.html',
      openAnalyzer: false
    },

    // vendor: ['vue-i18n'],

    extend(config) {
      webpackPlugins(config.plugins, this.options.srcDir);
      webpackModules(config.module);
    }
  },

  plugins: ['~/plugins/i18n.js'],

  modules: [
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

  router: {
    middleware: 'i18n'
  },

  generate: {
    routes: ['/en', '/en/about', '/de', '/de/about'],
    minify: {
      removeOptionalTags: false
    }
  },

  head: deepmerge.all([
    {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: []
    }
  ])

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
