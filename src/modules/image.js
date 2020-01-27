const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminWebp = require('imagemin-webp');

module.exports = function () {
  this.extendBuild((config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      oneOf: [
        {
          resourceQuery: /webp/,
          use: {
            loader: 'responsive-loader',
            options: {
              name: 'img/[name].[width]x[height].[sha512:hash:base64:7].[ext].webp',
              adapter: require('./responsive-loader/adapter.js')
            }
          }
        }
      ]
    });

    config.plugins.push(prepareConfig({
      test: /\.(webp)$/i,
      plugins: [
        imageminWebp({ quality: 75 })
      ]
    }, this.options.dev));
  });
};

function prepareConfig (options, dev) {
  return new ImageminPlugin(Object.assign(options, { disable: dev }));
}
