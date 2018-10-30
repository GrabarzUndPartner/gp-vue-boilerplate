module.exports = function(module) {
  let list = []
    .concat(
      ...[
        require('./modules/postcss-fix-loader')(module.rules),
        require('./modules/svg-sprite-loader')(module.rules),
        require('./modules/url-loader')(module.rules)
      ]
    )
    .reduce(function(result, item) {
      if (item && item.env && item.env[process.env.NODE_ENV]) {
        result.push(item.module);
      }
      return result;
    }, []);
  module.rules.push(...list);
};
