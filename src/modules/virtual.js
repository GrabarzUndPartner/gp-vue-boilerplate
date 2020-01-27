const VirtualLocales = require('./virtual/Locales');

module.exports = function () {
  this.extendBuild((config) => {
    config.plugins.push(new VirtualLocales());
  });
};
