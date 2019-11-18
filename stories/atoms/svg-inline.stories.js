import { storiesOf } from '@storybook/vue';

import gpAtomSvgInline from '@/components/atoms/SvgInline.vue';

storiesOf('atoms/SVG', module)
  .add('SVG Inline', () => ({
    components: {
      gpAtomSvgInline
    },
    template: '<gp-atom-svg-inline :src="src"/>',
    data: () => {
      return {
        src: 'image2.svg'
      };
    }
  }));
