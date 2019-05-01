const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = function () {
  this.extendBuild((config,
    {
      isClient,
      loaders: { vue }
    }) => {

    // svg-symbol
    if (isClient) {
      vue.transformAssetUrls['svg-symbol'] = ['src'];
    }

    config.plugins.push(new SpriteLoaderPlugin({ plainSprite: false }));
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            esModule: false
          }
        },
        {
          loader: 'svgo-loader',
          options: {
            externalConfig: '.svgorc.yml'
          }
        }
      ]
    });
  });
};
