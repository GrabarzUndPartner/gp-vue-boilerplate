const { Nuxt } = require('nuxt');
const nuxt = new Nuxt(require('../nuxt.config.js'))
const svg = require('../src/modules/svg');

module.exports = ({ config }) => {
  config.resolve.alias = Object.assign(config.resolve.alias, nuxt.options.alias);
  svg.bind({ extendBuild (fn) { fn(config) } })();

  config.module.rules.push({
    resourceQuery: /postcss/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './'
          }
        }
      }
    ]
  }, {
    resourceQuery: /blockType=story/,
    loader: "vue-storybook"
  }, {
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    options: {
      docgenOptions: {
        alias: config.resolve.alias
      }
    },
    enforce: 'post'
  }, {
    test: /\.js$/,
    resourceQuery: /component/,
    loader: 'vue-docgen-loader',
    enforce: 'post'
  });

  return config;
}

