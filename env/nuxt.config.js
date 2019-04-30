// process.env.DEBUG = 'nuxt:*';

const path = require('path');
const open = require('open');

module.exports = {
  dev: process.env.NODE_ENV === 'development',
  srcDir: 'src/',
  css: [],
  env: {},

  build: {
    analyze: getAnalyzerConfig(),
    babel: {
      presets ({ isServer }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 };
        return [
          [require.resolve('@nuxt/babel-preset-app'), { targets }]
        ];
      }
    },
    postcss: {
      plugins: {
        'postcss-normalize': {},
        'postcss-object-fit-images': {},
        '@fullhuman/postcss-purgecss': {
          content: [
            'src/pages/**/*.vue',
            'src/layouts/**/*.vue',
            'src/components/**/*.vue'
          ],
          whitelist: ['html', 'body'],
          whitelistPatterns: [/nuxt-/]
        },
        'postcss-momentum-scrolling': ['scroll'],
        'rucksack-css': {}
      },
      preset: {
        stage: 0,
        features: {
          'nesting-rules': true
        },
        importFrom: 'src/globals/postcss.js'
      }
    },
    parallel: true,
    transpile: [],

    extend (
      config,
      {
        isClient,
        loaders: { vue }
      }
    ) {
      if (isClient) {
        vue.transformAssetUrls['svg-symbol'] = ['src'];
      }
    }
  },

  generate: {
    dir: 'dist/website'
  },

  render: {
    http2: { push: true }
  },

  router: {
    base: '/'
  },

  hooks: {
    build: {
      done: function () {
        if (process.env.NODE_ENV === 'development' && !process.env.TRAVIS) {
          open('http://localhost:8050', { app: ['google chrome', '--incognito'] });
        }
      }
    }
  },

  plugins: [
    { src: '@/plugins/intersectionObserver' },
    { src: '@/plugins/svgSymbol' }
  ],

  modules: [
    '@/modules/fix/image',
    '@/modules/virtual',
    '@/modules/svg',
    '@/modules/webp',
    '@/modules/image',
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en.json',
        },
        {
          code: 'de',
          iso: 'de-DE',
          file: 'de.json'
        }
      ],
      lazy: true,
      langDir: 'globals/locales/',
      defaultLocale: 'de',
      strategy: 'prefix_except_default',
      seo: true,
      vueI18nLoader: true
    }],
    ['@nuxtjs/pwa', {
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
    }],
    ['@nuxtjs/sitemap', {
      path: 'sitemap.xml',
      hostname: 'https://localhost:8050',
      cacheTime: 1000 * 60 * 15,
      gzip: false,
      exclude: [],
      routes: [],
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
        lastmodrealtime: true
      }
    }],
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: '',
      Sitemap: 'https://localhost:8050/sitemap.xml'
    }],
    ['@/modules/licence', {
      perChunkOutput: false,
      handleMissingLicenseText: (packageName) => {
        console.log('Cannot find license for ' + packageName);
        return 'NO LICENSE TEXT';
      }
    }]
  ],

  head: {
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
    ],
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

function getAnalyzerConfig () {
  if (process.env.NODE_ENV === 'static') {
    return {
      analyzerMode: 'static',
      reportFilename: path.resolve('dist/reports/webpack-bundle-analyzer.html'),
      openAnalyzer: true
    };
  } else {
    return false;
  }
}
