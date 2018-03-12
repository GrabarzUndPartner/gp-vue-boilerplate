const WebpackMonitor = require('webpack-monitor');

module.exports = [{
  env: {
    development: false,
    production: false,
    build: false,
    static: false
  },
  plugin: new WebpackMonitor({
    capture: true, // -> default 'true'
    target: '../.nuxt/monitor/myStatsStore.json', // default -> '../monitor/stats.json'
    launch: false, // -> default 'false'
    port: 3030, // default -> 8081
    excludeSourceMaps: true // default 'true'
  })
}];
