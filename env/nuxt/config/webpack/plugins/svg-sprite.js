const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  env: {
    development: true,
    production: true,
    build: true,
    static: true
  },
  plugin: new SpriteLoaderPlugin({plainSprite: false})
};
