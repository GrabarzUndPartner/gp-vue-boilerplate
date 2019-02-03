const multi = require('multi-loader');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminWebp = require('imagemin-webp');

module.exports = function () {
  this.extendBuild(config => {
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      use: [
        {
          loader: multi(
            'file-loader?name=[path][name].[sha512:hash:base64:7].[ext].webp',
            'file-loader?name=[path][name].[sha512:hash:base64:7].[ext]'
          )
        }
      ]
    });
    let options = {
      test: /\.(webp)$/i,
      plugins: [imageminWebp({ quality: 75 })]
    };
    options = Object.assign(options, { disable: this.options.dev });
    config.plugins.push(new ImageminPlugin(options));
  });
};
