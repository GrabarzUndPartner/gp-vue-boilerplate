module.exports = function (module) {
  let urlLoader = module.rules.find((rule) => rule.loader === 'url-loader');
  urlLoader.test = /\.()$/;

  let vueLoader = module.rules.find((rule) => rule.loader === 'vue-loader');
  vueLoader.options.loaders.i18n = '@kazupon/vue-i18n-loader';
  vueLoader.options.cssModules = {
    localIdentName: '[path][name]_[local]_[hash:base64:5]',
    camelCase: true
  };

  let list = [].concat(...[
    require('./modules/svg-sprite')(module.rules),
    require('./modules/image-loader')(module.rules)
  ]).reduce(function (result, item) {
    if (item && item.env && item.env[process.env.NODE_ENV]) {
      result.push(item.module);
    }
    return result;
  }, []);
  module.rules.push(...list);
};
