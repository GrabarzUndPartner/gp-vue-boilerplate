import { storiesOf } from '@storybook/vue';

import GpHeader from '@/components/page/Header.vue';

storiesOf('page', module)
  .add('Header', () => ({
    components: {
      GpHeader
    },
    template: '<gp-header></gp-header>',
    data: () => {
      return {

      };
    }
  }));
