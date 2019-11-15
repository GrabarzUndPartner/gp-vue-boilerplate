import { storiesOf } from '@storybook/vue';

import gpAtomHeadline from '@/components/atoms/Headline';

storiesOf('atoms/Headline', module)
  .add('Overview', () => ({
    components: {
      gpAtomHeadline
    },
    template: `<div>
        <gp-atom-headline v-bind="headlineH1" tag="h1" />
        <gp-atom-headline v-bind="headlineH2" tag="h2" />
        <gp-atom-headline v-bind="headlineH3" tag="h3" />
        <gp-atom-headline v-bind="headlineH4" tag="h4" />
        <gp-atom-headline v-bind="headlineH5" tag="h5" />
        <gp-atom-headline v-bind="headlineH6" tag="h6" />
      </div>`,
    data: () => {
      return {
        headlineH1: {
          overline: 'Overline H1',
          headline: 'Headline H1',
          subline: 'Subline H1'
        },
        headlineH2: {
          overline: 'Overline H2',
          headline: 'Headline H2',
          subline: 'Subline H2'
        },
        headlineH3: {
          overline: 'Overline H3',
          headline: 'Headline H3',
          subline: 'Subline H3'
        },
        headlineH4: {
          overline: 'Overline H4',
          headline: 'Headline H4',
          subline: 'Subline H4'
        },
        headlineH5: {
          overline: 'Overline H5',
          headline: 'Headline H5',
          subline: 'Subline H5'
        },
        headlineH6: {
          overline: 'Overline H6',
          headline: 'Headline H6',
          subline: 'Subline H6'
        }
      };
    }
  }));
