module.exports = function() {
  return [
    {
      env: {
        development: true,
        production: true,
        build: true,
        static: true
      },
      module: {
        test: /\.worker\.js$/,
        use: [
          {
            loader: 'worker-loader',
            options: { inline: false, name: '[name].[hash:5].js' }
          }
        ]
      }
    }
  ];
};
