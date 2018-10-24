const VirtualImage = require('./virtual-file/VirtualImage');
const VirtualLang = require('./virtual-file/VirtualLang');

module.exports = [
  {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    plugin: new VirtualImage(/(?!\.png24)\.(png|jpe?g|gif)$/)
  },
  {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    plugin: new VirtualImage(/\.(webp)$/, {
      redirectTo: function(url, regex) {
        return url.replace(regex, '');
      }
    })
  },
  {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    plugin: new VirtualImage(/\.(png24\.png)$/, {
      redirectTo: function(url, regex) {
        return url.replace(regex, '.png');
      }
    })
  },
  {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    plugin: new VirtualLang()
  }
];
