module.exports = function(plugins, options) {
  let list = []
    .concat(
      ...[
        require('./plugins/virtual-file')(options),
        require('./plugins/imagemin'),
        require('./plugins/svg-sprite'),
        require('./plugins/monitor')
      ]
    )
    .reduce(function(result, item) {
      if (item.env[process.env.NODE_ENV]) {
        result.push(item.plugin);
      }
      return result;
    }, []);
  plugins.push(...list);
};
