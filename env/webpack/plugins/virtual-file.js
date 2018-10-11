const fs = require('fs');
const VirtualImage = require('webpack-virtual-modules');

module.exports = [
  {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    plugin: new VirtualImage(
      // {
      //   'src/assets/image1.png.webp': fs.readFileSync(
      //     'src/assets/image1.png'
      //   )
      // }
      /\.(webp)$/,
      function(resource, regex) {
        return {
          path: 'src/' + resource.request,
          file: fs.readFileSync('src/' + resource.request.replace(regex, ''))
        };
      }
    )
  },
  {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    plugin: new VirtualImage(/\.(png24\.png)$/, function(resource, regex) {
      return {
        path: 'src/' + resource.request,
        file: fs.readFileSync('src/' + resource.request.replace(regex, '.png'))
      };
    })
  }
];
