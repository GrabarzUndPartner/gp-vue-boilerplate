const ImageminPlugin = require('imagemin-webpack-plugin').default;
const multi = require('multi-loader');
const imageminWebp = require('imagemin-webp');

module.exports = (config, dev) => {
  config.module.rules.push({
    test: /\.(jpe?g|png)$/i,
    use: [
      {
        loader: multi(
          'file-loader?name=[path][name].[ext].webp',
          'file-loader?name=[path][name].[ext]'
        )
      }
    ]
  });

  options = {
    disable: dev,
    test: /\.(webp)$/i,
    plugins: [imageminWebp({ quality: 75 })]
  };
  config.plugins.push(new ImageminPlugin(options));
}
