module.exports = function () {
  this.extendBuild((config) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /inline/,
          use: [
            {
              loader: 'svg-inline-loader',
              options: {

              }
            }, {
              loader: 'svgo-loader',
              options: {
                externalConfig: '.svgorc.yml'
              }
            }
          ]
        }, {
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                spriteModule: 'node_modules/svg-sprite-loader/runtime/sprite.build'
              }
            }, {
              loader: 'svgo-loader',
              options: {
                externalConfig: '.svgorc.yml'
              }
            }

          ]
        }
      ]
    });
  });
};
