module.exports = function nuxtImageMin () {
  this.extendBuild(config => {
    let urlLoader = config.module.rules.find(
      rule =>
        rule.loader === 'url-loader' ||
        (rule.use && rule.use.find(item => item.loader === 'url-loader'))
    );
    urlLoader.test = /(unused)$/;
  });
};
