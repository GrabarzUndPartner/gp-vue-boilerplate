module.exports = (config) => {
  const cssLoader = config.module.rules.find(rule => rule.test.test('.css'));
  if (cssLoader) {
    config.module.rules.push({
      resourceQuery: /postcss/,
      use: ["style-loader", "css-loader", 'postcss-loader']
    });
  }
}
