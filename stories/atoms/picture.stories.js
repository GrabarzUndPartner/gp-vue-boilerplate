import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';

import GpPicture from '@/components/atoms/Picture.vue';

const data = {
  externalSrc: {
    'sources': [
      { 'media': 'default', 'src': 'https://picsum.photos/id/787/1152/600' },
      { 'media': 'xs', 'src': 'https://picsum.photos/id/787/1536/600' },
      { 'media': 'sm', 'src': 'https://picsum.photos/id/787/1984/600' },
      { 'media': 'md', 'src': 'https://picsum.photos/id/787/2400/600' },
      { 'media': 'lg', 'src': 'https://picsum.photos/id/787/3200/600' },
      { 'media': 'xl', 'src': 'https://picsum.photos/id/787/3840/600' }
    ]
  },
  externalSrcset: {
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

storiesOf('atoms/Picture', module)
  .add('src', () => ({
    components: { GpPicture },
    template: '<gp-picture :sources=sources alt="image description"><story/></gp-picture>',
    data: () => data.externalSrc,
    methods: { action: action('clicked') }
  }))
  .add('srcset', () => ({
    components: { GpPicture },
    template: '<gp-picture :sources=sources alt="image description"><story/></gp-picture>',
    data: () => data.externalSrcset,
    methods: { action: action('clicked') }
  }));
