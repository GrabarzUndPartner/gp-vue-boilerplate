module.exports = function(rules) {
  let vueLoader = rules.find(rule => rule.loader === 'vue-loader');
  vueLoader.options.loaders.i18n = '@kazupon/vue-i18n-loader';
  vueLoader.options.cssModules = {
    localIdentName: '[name]__[local]',
    camelCase: false
  };
  return [];
};
