module.exports = function (rules) {
  let vueLoader = rules.find((rule) => rule.loader === 'vue-loader');
  vueLoader.options.loaders.i18n = '@kazupon/vue-i18n-loader';
  vueLoader.options.cssModules = {
    localIdentName: '[path][name]--[local]-[hash:5]',
    camelCase: false
  };
  return [];
};
