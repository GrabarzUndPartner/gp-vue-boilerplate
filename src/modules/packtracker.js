const PacktrackerPlugin = require('@packtracker/webpack-plugin');

module.exports = function () {
  this.extendBuild(config => {
    config.plugins.push(new PacktrackerPlugin({
      upload: process.env.CI === 'true',
      fail_build: process.env.CI === 'true'
    }));
  });
};
