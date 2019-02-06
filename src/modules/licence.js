const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = function () {
  this.extendBuild(config => {
    config.plugins.push(new LicenseWebpackPlugin());
  });
};
