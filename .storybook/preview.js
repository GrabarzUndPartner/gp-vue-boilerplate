import { registerStories } from 'vue-storybook'
import { configure, storiesOf, addParameters, addDecorator } from '@storybook/vue'
import { withKnobs, text, color, select, boolean } from "@storybook/addon-knobs/vue";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo, setDefaults } from 'storybook-addon-vue-info';
import { action, configureActions } from '@storybook/addon-actions';

import './prepare';

const req = require.context("../src/components", true, /\.vue$/);

addParameters({
  backgrounds: [
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
  ],
  viewport: {
    viewports: Object.values(INITIAL_VIEWPORTS)
  }
});

addDecorator(withInfo({}));

setDefaults({
  header: true,
  source: true,
  docsInPanel: true
})

function loadStories () {
  req.keys().forEach(filename => {
    const config = {
      knobs: {
        text,
        boolean,
        color,
        select
      },
      decorators: [
        withKnobs({
          escapeHTML: false,
        }),
        withA11y,
        // withInfo
      ],
      methods: {
        // action
      }
    }
    registerStories(req, filename, storiesOf, config)
  })
}

configure(loadStories, module)
