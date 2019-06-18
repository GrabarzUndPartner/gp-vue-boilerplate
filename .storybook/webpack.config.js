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

  return config;
}
