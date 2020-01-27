const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = function (options) {
  this.extendBuild((config) => {
    config.plugins.push(new LicenseWebpackPlugin(options));
  });
};
