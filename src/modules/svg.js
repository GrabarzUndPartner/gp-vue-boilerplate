
var yaml = require('js-yaml');
var fs = require('fs');

const svgoConfig = Object.assign({}, yaml.safeLoad(fs.readFileSync(process.cwd() + '/.svgorc.yml', 'utf8')));

module.exports = function () {
  this.extendBuild((config) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /vue-template/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env'
                ]
              }
            },
            {
              loader: 'vue-svg-loader',
              options: { svgo: svgoConfig }
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

