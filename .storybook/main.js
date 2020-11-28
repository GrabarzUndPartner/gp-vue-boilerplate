const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {

    // extend config here

    return config
  },
  stories: [
    '~/components/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-a11y'
  ]
})
