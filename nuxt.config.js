// process.env.DEBUG = 'nuxt:*';

const path = require('path');
const fs = require('fs');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  dev: isDev,
  srcDir: 'src/',
  css: [],
  env: {},

  features: {
    store: false,
    layouts: true,
    meta: true,
    middleware: true,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: true,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false
  },

  server: {
    port: 8050,
    timing: false,
    https: (function () {
      const dir = './env/cert';
      const key = path.join(dir, 'server.key');
      const crt = path.join(dir, 'server.crt');

      if (fs.existsSync(key) && fs.existsSync(crt)) {
        return { key: fs.readFileSync(key), cert: fs.readFileSync(crt) };
      } else {
        return null;
      }
    })()
  },

  modern: 'client',
  build: {
    analyze: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js'
    },
    babel: {
      presets ({ isServer, isModern }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 };
        return [
          [
            require.resolve('@nuxt/babel-preset-app'), {
              targets,
              useBuiltIns: isModern ? 'entry' : 'usage'
            }
          ]
        ];
      }
    },
    postcss: {
      plugins: {
        'postcss-normalize': {},
        'postcss-url': {},
        'postcss-object-fit-images': {},
        '@fullhuman/postcss-purgecss': {
          content: [
            'src/pages/**/*.vue',
            'src/layouts/**/*.vue',
            'src/components/**/*.vue'
          ],
          whitelist: [
            'html', 'body'
          ],
          whitelistPatterns: [
            /nuxt-/
          ]
        },
        'postcss-momentum-scrolling': [
          'scroll'
        ],
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
    parallel: false,
    transpile: [],
    crossorigin: 'anonymous'
  },

  generate: {
    dir: 'dist'
  },

  render: {
    resourceHints: true,
    http2: { push: true }
  },

  router: {
    base: getBasePath(),
    prefetchLinks: true
  },

  plugins: [
    { src: '@/plugins/intersectionObserver' },
    { src: '@/plugins/lazyHydrate' }
  ],

  modules: [
    //'@/modules/codesandbox',
    '@/modules/fix/image',
    '@/modules/virtual',
    '@/modules/svg',
    '@/modules/image',
    '@/modules/analyzer',
    '@nuxtjs/axios',
    [
      '@bazzite/nuxt-optimized-images', {
        handleImages: [
          'jpeg', 'png', 'gif'
        ],
        responsive: {
          adapter: require('./src/modules/responsive-loader/adapter.js')
        },
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 70,
          progressive: true,
          sample: [
            '2x2'
          ]
        },
        pngquant: {
          quality: '75-100'
        },
        optipng: {
          optimizationLevel: 3
        },
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3
        }
      }
    ],
    [
      'nuxt-i18n', {
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
        // parsePages: true,
        // lazy: true,
        // langDir: 'globals/locales/',
        defaultLocale: 'de',
        strategy: 'prefix_except_default',
        seo: false,
        vueI18nLoader: false,
        vueI18n: {
          fallbackLocale: 'de',
          messages: {
            en: require('./src/globals/locales/en.json'),
            de: require('./src/globals/locales/de.json')
          }
        }
      }
    ],
    [
      'nuxt-polyfill', {
        features: [
          {
            require: 'object-fit-images',
            detect: () => 'objectFit' in document.documentElement.style,
            install: (objectFitImages) => window.objectFitImages = objectFitImages
          }, {
            require: 'picturefill',
            detect: () => 'HTMLPictureElement' in window || 'picturefill' in window,
          }, {
            require: 'picturefill/dist/plugins/mutation/pf.mutation',
            detect: () => 'HTMLPictureElement' in window || 'picturefill' in window,
          }, {
            require: 'intersection-observer',
            detect: () => 'IntersectionObserver' in window,
          },
        ]
      }
    ],
    [
      '@nuxtjs/pwa', {
        dev: isDev,
        icon: {
          iconSrc: 'src/static/favicon.png',
          sizes: [
            16, 120, 144, 152, 192, 384, 512
          ]
        },
        meta: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          mobileApp: true,
          mobileAppIOS: true,
          appleStatusBarStyle: 'default',
          favicon: true,
          name: 'TITLE',
          author: 'metaAuthor',
          description: 'metaDescription',
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
    ],
    [
      '@nuxtjs/sitemap', {
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
      }
    ],
    [
      '@nuxtjs/robots', {
        UserAgent: '*',
        Disallow: '',
        Sitemap: 'https://localhost:8050/sitemap.xml'
      }
    ],
    [
      '@/modules/licence', {
        perChunkOutput: false,
        unacceptableLicenseTest: (licenseType) => (licenseType === 'GPL'),
        handleMissingLicenseText: (packageName) => {
          return 'NO LICENSE TEXT: ' + packageName;
        },
        licenseTextOverrides: {
          'regenerator-runtime': `MIT License

            Copyright (c) 2014-present, Facebook, Inc.

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`,
          'consola': 'MIT License',
          'intersection-observer': 'W3C Software and Document License'
        }
      }
    ]
  ],

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  }
};

function getBasePath () {
  return process.env.npm_config_base || '/';
}
