const VirtualImage = require('./virtual-file/VirtualImage');
const VirtualLang = require('./virtual-file/VirtualLang');
let locales = [];

module.exports = function(options) {
  locales = options.modules.reduce((result, item) => {
    if (item[0] === 'nuxt-i18n') {
      return result.concat(item[1].locales);
    }
    return result;
  }, []);

  return [
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
      plugin: new VirtualLang(/^@.+\.(lang)/, locales)
    }
  ];
};
