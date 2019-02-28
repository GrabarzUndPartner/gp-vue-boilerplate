const VirtualLang = require('./virtual/Language');

module.exports = function () {
  this.extendBuild(config => {
    config.plugins.push(new VirtualLang());
  });
};
