import path from 'pathe';
import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from 'vite-svg-loader';
import * as postcssFunctions from './src/globals/postcss/functions';

const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig(() => {
  return {
    dev: isDev,
    ssr: true,

    srcDir: 'src/',

    css: ['@/assets/css/vars.css'],

    site: {
      indexable: false,
      trailingSlash: true,
      url: getWebsiteHost()
    },

    app: {
      baseURL: getBaseUrl(),
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          {
            charset: 'utf-8'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      }
    },

    devServer: {
      port: getPort(),
      host: getHost()
    },

    build: {
      filenames: {
        app: ({ isDev }) => (isDev ? '[name].js' : '[name].[chunkhash].js'),
        chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[chunkhash].js')
      }
    },

    vite: {
      plugins: [
        svgLoader({
          defaultImport: 'component', // or 'raw'
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    collapseGroups: false
                  }
                }
              }
            ]
          }
        })
      ]
    },

    postcss: {
      plugins: {
        'postcss-preset-env': {
          preserve: true,
          stage: 0,
          features: {
            'nesting-rules': true
          }
        },
        '@csstools/postcss-global-data': {
          files: [
            path.resolve(
              __dirname,
              'src/globals/postcss/preset-env/custom-media.pcss'
            )
          ]
        },
        'postcss-custom-media': {},
        'postcss-functions': {
          functions: postcssFunctions
        },
        'postcss-normalize': {},
        'postcss-momentum-scrolling': ['scroll'],
        'rucksack-css': {},
        '@fullhuman/postcss-purgecss': {
          content: [
            'src/pages/**/*.vue',
            'src/layouts/**/*.vue',
            'src/components/**/*.vue'
          ],
          safelist: ['html', 'body', /nuxt-/]
        },
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        },
        cssnano: {
          preset: [
            'default',
            {
              discardDuplicates: false,
              mergeRules: false
            }
          ]
        }
      },
      order: 'cssnanoLast'
    },

    image: {
      // The screen sizes predefined by `@nuxt/image`:
      screens: {
        default: 320,
        xxs: 480,
        xs: 576,
        sm: 768,
        md: 996,
        lg: 1200,
        xl: 1367,
        xxl: 1600,
        '4k': 1921
      },
      domains: [
        'https://picsum.photos',
        'https://img.youtube.com',
        'https://i.vimeocdn.com',
        'https://i.pickadummy.com'
      ],
      alias: {
        picsum: 'https://picsum.photos',
        youtube: 'https://img.youtube.com',
        vimeo: 'https://i.vimeocdn.com',
        pickadummy: 'https://i.pickadummy.com'
      }
    },

    booster: {
      fonts: [
        {
          family: 'Raleway',
          fallback: ['sans-serif'],
          variances: [
            {
              style: 'normal',
              weight: 400,
              sources: [
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-regular.woff',
                  type: 'woff'
                },
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-regular.woff2',
                  type: 'woff2'
                }
              ]
            },
            {
              style: 'italic',
              weight: 400,
              sources: [
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-italic.woff',
                  type: 'woff'
                },
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-italic.woff2',
                  type: 'woff2'
                }
              ]
            },
            {
              style: 'normal',
              weight: 700,
              sources: [
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700.woff',
                  type: 'woff'
                },
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700.woff2',
                  type: 'woff2'
                }
              ]
            },
            {
              style: 'italic',
              weight: 700,
              sources: [
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700italic.woff',
                  type: 'woff'
                },
                {
                  src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700italic.woff2',
                  type: 'woff2'
                }
              ]
            }
          ]
        },
        {
          family: 'Roboto Slab',
          fallback: ['serif'],
          variances: [
            {
              style: 'normal',
              weight: 400,
              sources: [
                {
                  src: '@/assets/fonts/roboto-slab-v13-latin/roboto-slab-v13-latin-regular.woff',
                  type: 'woff'
                },
                {
                  src: '@/assets/fonts/roboto-slab-v13-latin/roboto-slab-v13-latin-regular.woff2',
                  type: 'woff2'
                }
              ]
            },
            {
              style: 'normal',
              weight: 700,
              sources: [
                {
                  src: '@/assets/fonts/roboto-slab-v13-latin/roboto-slab-v13-latin-700.woff',
                  type: 'woff'
                },
                {
                  src: '@/assets/fonts/roboto-slab-v13-latin/roboto-slab-v13-latin-700.woff2',
                  type: 'woff2'
                }
              ]
            }
          ]
        }
      ]
    },

    eslint: {
      config: {
        typescript: false
      }
    },

    modules: [
      '@nuxt/eslint',
      '@nuxtjs/seo',
      '@nuxt/content',
      '@pinia/nuxt',
      'nuxt-booster'
    ],

    buildModules: [
      '@nuxtjs/dotenv',
      ...(isDev ? ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'] : [])
    ]
  };
});

function getWebsiteHost() {
  return (
    process.env.npm_config_website_host ||
    process.env.WEBSITE_HOST ||
    'http://localhost:8050'
  );
}

function getBaseUrl() {
  return process.env.npm_config_base_url || process.env.BASE_URL || '/';
}

function getHost() {
  return process.env.npm_config_host || process.env.HOST || 'localhost';
}

function getPort() {
  return process.env.npm_config_port || process.env.PORT || 8050;
}
