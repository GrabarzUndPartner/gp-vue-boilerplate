
const fs = require('fs');
const yaml = require('js-yaml');

const svgoConfig = Object.assign({}, yaml.safeLoad(fs.readFileSync(process.cwd() + '/.svgorc.yml', 'utf8')));

module.exports = function () {
  this.extendBuild((config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test && rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace(/svg\|?/, '').replace(/\//g, '');
        return { ...rule, test: new RegExp(test) };
      } else {
        return rule;
      }
    });

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

