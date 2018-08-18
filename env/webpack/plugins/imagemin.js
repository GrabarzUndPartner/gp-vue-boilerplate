const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminWebp = require('imagemin-webp');
const imageminMozJpeg = require('imagemin-mozjpeg');
// const imageminJpegRecompress = require('imagemin-jpeg-recompress');

module.exports = [
  {
    env: {
      development: false,
      production: true,
      build: true,
      static: true
    },
    plugin: new ImageminPlugin({
      test: /^(?!.*(?:\.png24)).*\.png$/i,
      pngquant: {
        quality: '75-100'
      }
    })
  }, {
    env: {
      development: false,
      production: true,
      build: true,
      static: true
    },
    plugin: new ImageminPlugin({
      test: /\.(jpe?g|png|gif)$/i,
      pngquant: null,
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
    })
  }, {
    env: {
      development: false,
      production: true,
      build: true,
      static: true
    },
    plugin: new ImageminPlugin({
      test: /\.(webp)$/i,
      pngquant: null,
      optipng: null,
      jpegtran: null,
      plugins: [
        imageminWebp({
          quality: 50
        })
      ]
    })
  }
];
