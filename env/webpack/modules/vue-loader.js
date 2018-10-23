module.exports = function(rules) {
  rules.push({
    resourceQuery: /\bblockType=i18n\b/,
    use: [{ loader: '@kazupon/vue-i18n-loader' }],
    type: 'javascript/auto'
  });
  return [];
};
