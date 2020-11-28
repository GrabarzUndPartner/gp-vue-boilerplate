<template>
  <layout-default-container
    class="organism-stage-picture"
    v-bind="options"
  >
    <template slot="background">
      <atom-responsive-image
        v-if="picture"
        v-bind="picture"
      />
    </template>
  </layout-default-container>
</template>

<script>
import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import AtomResponsiveImage from '@/components/atoms/ResponsiveImage';

export default {
  components: {
    LayoutDefaultContainer,
    AtomResponsiveImage
  },

  props: {
    options: {
      type: Object,
      default () {
        return {};
      }
    },

    picture: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            // { 'media': 'default', 'src': 'img/sample-a-16-9/retina/824x464.jpg' },
            // { 'media': 'xs', 'src': 'img/sample-a-16-9/retina/1536x864.jpg' },
            // { 'media': 'sm', 'src': 'img/sample-a-16-9/retina/1984x1116.jpg' },
            // { 'media': 'md', 'src': 'img/sample-a-16-9/retina/2400x1350.jpg' },
            // { 'media': 'lg', 'src': 'img/sample-a-16-9/retina/3200x1800.jpg' },
            // { 'media': 'xl', 'src': 'img/sample-a-16-9/retina/3840x2160.jpg' }
            { media: 'default', srcset: 'img/sample-a-16-9/412x232.jpg' },
            { media: 'xs', srcset: 'img/sample-a-16-9/768x432.jpg' },
            { media: 'sm', srcset: 'img/sample-a-16-9/992x558.jpg' },
            { media: 'md', srcset: 'img/sample-a-16-9/1200x675.jpg' },
            { media: 'lg', srcset: 'img/sample-a-16-9/1600x900.jpg' },
            { media: 'xl', srcset: 'img/sample-a-16-9/1920x1080.jpg' }
          ]
        };
      }
    }

  }
};
</script>

<style lang="postcss">
</style>
