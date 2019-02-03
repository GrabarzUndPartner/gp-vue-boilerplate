const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozJpeg = require('imagemin-mozjpeg');

module.exports = (config, dev) => {
  let options = {
    disable: dev,
    test: /\.(jpe?g|png|gif)$/i,
    pngquant: {
      quality: '75-100'
    },
    optipng: {
      optimizationLevel: 3
    },
    jpegtran: null,
    plugins: [
      imageminMozJpeg({
        quality: 70,
        progressive: true,
        sample: ['2x2']
      })
    ]
  };
  config.plugins.push(new ImageminPlugin(options));
}
