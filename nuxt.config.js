// process.env.DEBUG = 'nuxt:*';

const path = require('path');
const fs = require('fs');
const isDev = process.env.NODE_ENV === 'development';

const DEFAULT_LANG = 'de';

module.exports = {
  dev: isDev,
  srcDir: 'src/',
  css: [],
  env: {},

  features: {
    store: true,
    layouts: true,
    meta: true,
    middleware: true,
    transitions: true,
    deprecations: false,
    validate: true,
    asyncData: true,
    fetch: true,
    clientOnline: true,
    clientPrefetch: true,
    clientUseUrl: true,
    componentAliases: true,
    componentClientOnly: true
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

  modern: isDev ? false : 'client',

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
        'postcss-custom-media': {
          importFrom: [
            'src/globals/postcss.js'
          ]
        },
        'postcss-nesting': {},
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
        'rucksack-css': {},
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        }
      },
      preset: {
        preserve: false,
        stage: 0,
        features: {
          'custom-media-queries': false,
          'nesting-rules': false
        },
        importFrom: 'src/globals/postcss.js'
      }
    },

    parallel: false,
    transpile: [],
    crossorigin: 'anonymous'
  },

  generate: {
    dir: 'dist',
    routes: getProjectRoutes(DEFAULT_LANG)
  },

  render: {
    resourceHints: true,
    http2: { push: true }
  },

  router: {
    base: getBasePath(),
    prefetchLinks: true
  },

  workbox: {
    cachingExtensions: '@/workbox/workbox-range-request.js',
    runtimeCaching: [
      {
        urlPattern: /\/.*/,
        handler: 'networkFirst'
      }
    ]
  },

  plugins: [],

  modules: [
    '@/modules/virtual',
    // '@/modules/codesandbox',
    '@/modules/fix/image',
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
        defaultLocale: DEFAULT_LANG,
        strategy: 'prefix_except_default',
        seo: false,
        vueI18nLoader: false,
        vueI18n: {
          fallbackLocale: DEFAULT_LANG,
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
            install: objectFitImages => (window.objectFitImages = objectFitImages)
          },
          {
            require: 'picturefill',
            detect: () => 'HTMLPictureElement' in window || 'picturefill' in window
          },
          {
            require: 'picturefill/dist/plugins/mutation/pf.mutation.js',
            detect: () => 'HTMLPictureElement' in window || 'picturefill' in window
          },
          {
            require: 'custom-event-polyfill',
            detect: () => 'CustomEvent' in window &&
              // In Safari, typeof CustomEvent == 'object' but it otherwise works fine
              (typeof window.CustomEvent === 'function' ||
                (window.CustomEvent.toString().includes('CustomEventConstructor')))
          },
          {
            require: 'intersection-observer',
            detect: () => 'IntersectionObserver' in window
          },
          {
            require: 'domtokenlist-shim',
            detect: () => 'DOMTokenList' in window && (function (x) {
              return 'classList' in x ? !x.classList.toggle('x', false) && !x.className : true;
            })(document.createElement('x'))
          },
          {
            require: 'requestidlecallback',
            detect: () => 'requestIdleCallback' in window
          }
        ]
      }
    ],
    [
      '@/modules/licence', {
        perChunkOutput: false,
        unacceptableLicenseTest: licenseType => (licenseType === 'GPL'),
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
          consola: 'MIT License',
          'intersection-observer': 'W3C Software and Document License',
          requestidlecallback: 'MIT License',
          'vue-browserupdate': 'MIT License'
        }
      }
    ]
  ],

  buildModules: [

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
    ]
  ],

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
};

function getBasePath () {
  return process.env.npm_config_base || '/';
}

function getProjectRoutes (defaultLang) {
  const projectsByLocale =
    [
      {
        locale: 'de',
        path: '/projekte',
        items: [
          'projekt-1', 'projekt-2'
        ]
      },
      {
        locale: 'en',
        path: '/projects',
        items: [
          'project-1', 'project-2'
        ]
      }
    ];
  return () => projectsByLocale.reduce((result, projects) => {
    return projects.items.reduce((result, item) => {
      const localePath = projects.locale !== defaultLang ? `/${projects.locale}` : '';
      result.push(localePath + projects.path + '/' + item);
      return result;
    }, result);
  }, []);
}

