const webpack = require('webpack');
var debug = require('debug')('webpack-virtual-modules');
module.exports = [
  {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    plugin: new webpack.NormalModuleReplacementPlugin(/\.webp$/, function(
      resource
    ) {
      debug('TEST123', resource);
      resource.request = resource.request.replace(/\.webp$/, '');
    })
  }
];
