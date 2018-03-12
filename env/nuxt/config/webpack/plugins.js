const fs = require('fs');
const VirtualImage = require('./plugins/virtual-image');

module.exports = function (plugins, srcDir) {
  let list = [].concat(...[
    {
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
    },
    // require('./plugins/virtual-files'),
    require('./plugins/imagemin'),
    require('./plugins/svg-sprite'),
    require('./plugins/monitor')
  ]).reduce(function (result, item) {
    if (item.env[process.env.NODE_ENV]) {
      result.push(item.plugin);
    }
    return result;
  }, []);
  plugins.push(...list);
};
