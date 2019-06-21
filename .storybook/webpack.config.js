const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@': path.resolve(__dirname, "../src"),
    '@@': path.resolve(__dirname, "../"),
    '~': path.resolve(__dirname, "../src"),
    '~~': path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    resourceQuery: /postcss/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: '.storybook/'
          }
        }
      }
    ]
  });

  config.module.rules = config.module.rules.map(rule => {
    if (rule.test && rule.test.toString().includes('svg')) {
      const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
      return { ...rule, test: new RegExp(test) }
    } else {
      return rule
    }
  });

  config.module.rules.push({
    test: /\.svg$/,
    oneOf: [{
      resourceQuery: /include/,
      use: [{
        loader: 'raw-loader',
        options: {}
      }, {
        loader: 'svgo-loader',
        options: {
          externalConfig: '.svgorc.yml'
        }
      }]
    },
    {
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    }]
  });

  return config;
}
