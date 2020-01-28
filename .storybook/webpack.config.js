const { Nuxt } = require('nuxt');
const nuxt = new Nuxt(require('../nuxt.config.js'))
const svg = require('../src/modules/svg');
const postcssPresetEnv = require('postcss-preset-env');

const postcssOptions = Object.assign({}, nuxt.options.build.postcss);
postcssOptions.plugins = Object.keys(postcssOptions.plugins).map(pluginName => {
  return require(pluginName)(postcssOptions.plugins[pluginName]);
});

postcssOptions.plugins.push(postcssPresetEnv(postcssOptions.preset))
delete postcssOptions.preset;

module.exports = ({ config }) => {
  config.resolve.alias = Object.assign(config.resolve.alias, nuxt.options.alias);
  svg.bind({ extendBuild (fn) { fn(config) } })();

  config.module.rules.push({
    test: /\.p(ost)?css$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: postcssOptions
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

