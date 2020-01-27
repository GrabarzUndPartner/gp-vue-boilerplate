const PacktrackerPlugin = require('@packtracker/webpack-plugin');

module.exports = function () {
  this.extendBuild((config) => {
    config.plugins.push(new PacktrackerPlugin({
      branch: process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH,
      commit: process.env.TRAVIS_PULL_REQUEST_SHA || process.env.TRAVIS_COMMIT,
      upload: process.env.CI === 'true',
      fail_build: process.env.CI === 'true'
    }));
  });
};
