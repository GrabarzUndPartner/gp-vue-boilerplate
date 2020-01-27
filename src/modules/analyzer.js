const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isDev = process.env.NODE_ENV === 'development';

module.exports = function () {
  this.extendBuild((config) => {
    if (!isDev) {
      config.plugins.push(new BundleAnalyzerPlugin({
        reportFilename: path.resolve(`reports/webpack/${config.name}.html`),
        statsFilename: path.resolve(`reports/webpack/stats/${config.name}.json`),
        analyzerMode: 'static',
        generateStatsFile: true,
        openAnalyzer: false,
        logLevel: 'info',
        defaultSizes: 'gzip',
        statsOptions: 'normal'
      }));
    }
  });
};
