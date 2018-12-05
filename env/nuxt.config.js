// process.env.DEBUG = 'webpack-virtual-modules';

const path = require('path');

module.exports = {
  dev: process.env.NODE_ENV === 'development',
  srcDir: 'src/',
  css: [],
  env: {},
  build: {
    analyze: false,
    // analyze: {
    //   analyzerMode: 'static',
    //   reportFilename: path.resolve('reports/webpack-bundle-analyzer.html'),
    //   openAnalyzer: false
    // },
    parallel: true,
    transpile: []
  },
  render: {
    http2: { push: true }
  },

  router: {
    base: '/'
  },

  plugins: [{ src: '@/plugins/intersectionObserver' }],

  vendor: ['default-passive-events'],

  modules: [
    '@/modules/fix/postcss',
    '@/modules/fix/image',
    '@/modules/virtual',
    '@/modules/svg',
    '@/modules/webp',
    '@/modules/image',
    '@nuxtjs/axios',
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
        vueI18nLoader: true
      }
    ],
    [
      '@nuxtjs/pwa',
      {
        dev: process.env.NODE_ENV === 'development',
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
          name: 'Sample MANIFEST',
          short_name: 'Sample',
          lang: 'de'
        }
      }
    ]
  ],

  head: {
    meta: [],
    link: [],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=HTMLPictureElement',
        defer: true
      },
      {
        innerHTML:
          'document.createElement( "picture" );document.createElement( "source" );'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
};
