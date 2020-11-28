import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export * from '~~/.nuxt-storybook/storybook/preview.js'

export const parameters = {
  backgrounds: {
    values: [
      { name: 'green', value: '#2bc4b6' },
      { name: 'darkgreen', value: '#30845f' },
      { name: 'darkergreen', value: '#127269' },
      { name: 'magenta', value: '#e83162' },
      { name: 'blue', value: '#3397c1' },
      { name: 'curry', value: '#d19700' },
      { name: 'rose', value: '#feeee1' },
      { name: 'grey', value: '#efefef' },
      { name: 'purple', value: '#752fa4' },
      { name: 'brown', value: '#87835b' }
    ]
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
