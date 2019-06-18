module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true
      },
      importFrom: 'src/globals/postcss.js'
    },
    'postcss-normalize': {},
    'postcss-url': {},
    'postcss-object-fit-images': {},
    '@fullhuman/postcss-purgecss': {
      content: [
        'src/pages/**/*.vue',
        'src/layouts/**/*.vue',
        'src/components/**/*.vue'
      ],
      whitelist: [
        'html', 'body'
      ],
      whitelistPatterns: [
        /nuxt-/
      ]
    },
    'postcss-momentum-scrolling': [
      'scroll'
    ],
    'rucksack-css': {}
  },
  preset: {
    stage: 0,
    features: {
      'nesting-rules': true
    },
    importFrom: 'src/globals/postcss.js'
  }
};
