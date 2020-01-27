'use strict';

const sharp = require('sharp');

module.exports = function (imagePath) {
  const image = sharp(imagePath);

  return {
    metadata: function metadata () {
      return image.metadata();
    },
    resize: function resize (_ref) {
      let width = _ref.width;
      const mime = _ref.mime;
      const options = _ref.options;
      return new Promise(function (resolve, reject) {
        if (options.nonretina) {
          width /= 2;
        }
        let resized = image.clone().resize(width, null);
        if (options.background) {
          resized = resized.background(options.background).flatten();
        }

        if (mime === 'image/jpeg') {
          resized = resized.jpeg({
            quality: options.quality
          });
        }

        resized.toBuffer(function (err, data, _ref2) {
          const height = _ref2.height;
          if (err) {
            reject(err);
          } else {
            resolve({
              data,
              width,
              height
            });
          }
        });
      });
    }
  };
};
