import { storiesOf } from '@storybook/vue';

import GpSvgInline from '@/components/atoms/SvgInline.vue';

storiesOf('atoms/SVG', module)
  .add('SVG Inline', () => ({
    components: {
      GpSvgInline
    },
    template: '<gp-svg-inline :src="src"/>',
    data: () => {
      return {
        src: 'image2.svg'
      };
    }
  }));
