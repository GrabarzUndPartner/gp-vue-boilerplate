// issue: https://github.com/nuxt/nuxt.js/issues/4061
// fix: https://qiita.com/karszawa/items/96a9156936fba129cff0

module.exports = function(rules) {
  const cssLoader = rules.find(rule => rule.test.test('.css'));
  if (cssLoader) {
    rules.push({
      test: /\.postcss/,
      oneOf: cssLoader.oneOf
    });
  }

  return [];
};
