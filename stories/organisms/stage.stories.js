import { storiesOf } from '@storybook/vue';

import GpStage from '@/components/organisms/Stage.vue';

storiesOf('organisms/stage', module)
  .add('Default Stage', () => ({
    components: {
      GpStage
    },
    template: '<gp-stage :content="content"></gp-stage>',
    data: () => {
      return {
        content: {
          headline: 'ARTICLE HEADLINE',
          subline: 'ARTICLE SUBLINE',
          'sources': [
            {
              'media': 'default',
              'srcset': {
                '2x': 'https://picsum.photos/id/787/1152/600',
                '1x': 'https://picsum.photos/id/787/576/300'
              }
            },
            {
              'media': 'xs',
              'srcset': {
                '2x': 'https://picsum.photos/id/787/1536/600',
                '1x': 'https://picsum.photos/id/787/768/300'
              }
            },
            {
              'media': 'sm',
              'srcset': {
                '2x': 'https://picsum.photos/id/787/1984/600',
                '1x': 'https://picsum.photos/id/787/992/300'
              }
            },
            {
              'media': 'md',
              'srcset': {
                '2x': 'https://picsum.photos/id/787/2400/600',
                '1x': 'https://picsum.photos/id/787/1200/300'
              }
            },
            {
              'media': 'lg',
              'srcset': {
                '2x': 'https://picsum.photos/id/787/3200/600',
                '1x': 'https://picsum.photos/id/787/1600/300'
              }
            },
            {
              'media': 'xl',
              'srcset': {
                '2x': 'https://picsum.photos/id/787/3840/600',
                '1x': 'https://picsum.photos/id/787/1920/300',
              }
            }
          ]
        }
      };
    }
  }));
