import 'storybook-addon-vue-info/lib/register'
import '@storybook/addon-knobs/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-actions/register';

import '@storybook/addon-links/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-backgrounds/register';
import '@storybook/addon-viewport/register';


import { addons } from '@storybook/addons';
import grabarzTheme from './theme/grabarz';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: grabarzTheme,
  selectedPanel: undefined
});

