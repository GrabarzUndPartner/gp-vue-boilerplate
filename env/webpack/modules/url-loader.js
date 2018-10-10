module.exports = function(rules) {
  let urlLoader = rules.find(
    rule =>
      rule.loader === 'url-loader' ||
      (rule.use && rule.use.find(item => item.loader === 'url-loader'))
  );
  urlLoader.test = /(?!\.png24)\.(png|jpe?g|gif|webp)$/;
  return [];
};
