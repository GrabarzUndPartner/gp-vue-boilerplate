import { storiesOf } from '@storybook/vue';

import GpFooter from '@/components/page/Footer.vue';

storiesOf('page', module)
  .add('Footer', () => ({
    components: {
      GpFooter
    },
    template: '<gp-footer :navigation="navigation"></gp-footer>',
    data: () => {
      return {
        navigation: [
          {
            'title': 'Kontakt',
            'url': 'contact'
          },
          {
            'title': 'Nutzungsbedingungen',
            'url': 'terms'
          },
          {
            'title': 'Datenschutz',
            'url': 'legals'
          }
        ]
      };
    }
  }));
