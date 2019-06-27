module.exports = function () {
  this.extendBuild((config) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /include/,
          use: [
            {
              loader: 'raw-loader',
              options: {

              }
            }, {
              loader: 'svgo-loader',
              options: {
                externalConfig: '.svgorc.yml'
              }
            }
          ]
        },
        {
          use: [
            {
              loader: 'file-loader',
              options: {

              }
            }
          ]
        }
      ]
    });
  });
};
