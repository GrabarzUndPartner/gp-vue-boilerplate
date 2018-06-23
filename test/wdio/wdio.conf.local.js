var notifier = require('node-notifier');

// require prod configuration
var prodConfig = require('./wdio.conf.js').config;

// clone prod config and add new properties/overrides
var localConfig = Object.assign(prodConfig, {
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],

  services: ['selenium-standalone'],

  // Hooks to notify Growl-like programs
  onPrepare: function(/*config , capabilities*/) {
    notifier.notify({
      title: 'WebdriverIO',
      message: 'Test run started'
    });
  },
  afterTest: function(test) {
    if (!test.passed) {
      notifier.notify({
        title: 'Test failure!',
        message: test.parent + ' ' + test.title
      });
    }
  },
  onComplete: function(/*exitCode*/) {
    notifier.notify({
      title: 'WebdriverIO',
      message: 'Tests finished running.'
    });
  }
});

// delete Sauce service information
delete localConfig.user;
delete localConfig.key;
delete localConfig.sauceConnect;

// We're going to skip visual regression testing since we're running local browsers
delete localConfig.visualRegression;

exports.config = localConfig;
