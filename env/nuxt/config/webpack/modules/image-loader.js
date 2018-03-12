module.exports = function (rules) {
  return [{
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    module: {
      test: /\.(png|jpe?g|gif)\.?(\w*)?$/i,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 1000,
          name (file) {
            let [, name, ext] = file.match(/(\w+)\.((png|jpe?g|gif).*)$/);
            return name + '.[hash:7].' + ext;
          }
        }
      }]
    }
  }];
};
