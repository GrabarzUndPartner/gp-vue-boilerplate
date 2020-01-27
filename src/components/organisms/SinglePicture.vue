<template>
  <layout-default-container
    class="organism-picture"
    v-bind="options"
  >
    <template v-slot:container>
      <atom-responsive-image v-bind="picture" />
    </template>
  </layout-default-container>
</template>

<script>
import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import AtomResponsiveImage from '@/components/atoms/ResponsiveImageStatic';

export default {
  components: {
    LayoutDefaultContainer,
    AtomResponsiveImage
  },

  props: {

    options: {
      type: Object,
      default () {
        return null;
      }
    },

    picture: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
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
.organism-picture {
  position: relative;
  width: 100%;

  &::before {
    display: block;
    width: 100%;
    padding-top: calc(9 / 16 * 100%);
    content: "";
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
