module.exports = function(plugins) {
  let list = []
    .concat(
      ...[
        require('./plugins/virtual-file'),
        require('./plugins/imagemin'),
        require('./plugins/svg-sprite')
        // require('./plugins/monitor')
        // require('./plugins/module-replacement')
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
