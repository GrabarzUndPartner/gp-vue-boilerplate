module.exports = function() {
  return {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    module: {
      resourceQuery: /\bblockType=i18n\b/,
      use: [{ loader: '@kazupon/vue-i18n-loader' }],
      type: 'javascript/auto'
    }
  };
};
