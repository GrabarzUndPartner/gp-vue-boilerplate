const fs = require('fs');
const VirtualImage = require('./virtual-image');

module.exports = {
  env: {
    development: true,
    production: true,
    build: true,
    static: true
  },
  plugin: new VirtualImage({}, {
    test: /((jpe?g|png)\.webp)|(png24\.png)$/i,
    handler: function (p, resolve) {
      resolve(fs.readFileSync(p.replace(/(\w+\.(png|jpe?g|gif)).*$/i, '$1')));
    }
  })
};
