module.exports = {
  plugins: {
    'postcss-normalize': {},
    'postcss-object-fit-images': {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true
      },
      importFrom: 'src/globals/postcss.js'
    },
    '@fullhuman/postcss-purgecss': {
      content: [
        'src/pages/**/*.vue',
        'src/layouts/**/*.vue',
        'src/components/**/*.vue'
      ],
      whitelist: ['html', 'body'],
      whitelistPatterns: [/nuxt-/]
    },
    'postcss-momentum-scrolling': ['scroll'],
    'postcss-pseudo-content-insert': {},
    'rucksack-css': {}
  }
};
