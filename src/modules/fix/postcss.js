module.exports = function nuxtImageMin() {
  this.extendBuild(config => {
    const cssLoader = config.module.rules.find(rule => rule.test.test('.css'));
    if (cssLoader) {
      config.module.rules.push({
        test: /\.postcss/,
        oneOf: cssLoader.oneOf
      });
    }
  });
};
