var webdriver = require('selenium-webdriver');

module.exports = {
  getBrowser (capability) {
    if (process.env.SAUCE_USERNAME !== undefined) {
      return getSaucelabsBrowser(capability);
    } else {
      return getLocalBrowser(capability);
    }
  }
};

function getLocalBrowser (capability) {
  return new webdriver.Builder()
    .withCapabilities(capability).build();
}

function getSaucelabsBrowser (capability) {
  return new webdriver.Builder()
    .usingServer(getSaucelabsServerUrl())
    .withCapabilities(convertToSaucelabCapabilities(capability))
    .build();
}

function getSaucelabsServerUrl () {
  return 'http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub';
}

function convertToSaucelabCapabilities (capability) {
  return Object.assign(capability, {
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER,
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY
  });
}
