import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import MyPicture from '~/components/atoms/Picture.vue';

storiesOf('Picture', module).add('default', () => ({
  components: { MyPicture },
  template: '<my-picture :sources=sources alt="image description"><story/></my-picture>',
  data () {
    return {
      sources: {
        0: { 'media': 'default', 'src': 'sample/576x300.jpg' },
        1: { 'media': 'xs', 'src': 'sample/768x300.jpg' },
        2: { 'media': 'sm', 'src': 'sample/992x300.jpg' },
        3: { 'media': 'md', 'src': 'sample/1200x300.jpg' },
        4: { 'media': 'lg', 'src': 'sample/1600x300.jpg' },
        5: { 'media': 'xl', 'src': 'sample/1920x300.jpg' }
      }
    };
  },
  methods: { action: action('clicked') }
}));
