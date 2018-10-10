module.exports = function() {
  return {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    module: {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            esModule: false
          }
        },
        {
          loader: 'svgo-loader',
          options: {
            externalConfig: '.svgorc.yml'
          }
        }
      ]
    }
  };
};
