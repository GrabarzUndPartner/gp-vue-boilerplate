module.exports = function (rules) {
  let urlLoader = rules.find((rule) => rule.loader === 'url-loader');
  urlLoader.test = /\.()$/;
  return [];
};
