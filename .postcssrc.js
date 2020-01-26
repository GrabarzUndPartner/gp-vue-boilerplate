module.exports = {
  plugins: {
    'postcss-custom-media': {
      importFrom: [
        'src/globals/postcss.js'
      ]
    },
    'postcss-nesting': {},
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
    'rucksack-css': {},
    'lost': {
      gutter: '15px',
      flexbox: 'flex',
      cycle: 'auto'
    }
  },
  preset: {
    preserve: false,
    stage: 0,
    features: {
      'custom-media-queries': false,
      'nesting-rules': false
    },
    importFrom: 'src/globals/postcss.js'
  }
};
