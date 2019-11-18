<template>
  <gp-layout-default-container
    class="gp-organism-picture"
    :options="options"
  >
    <template v-slot:container>
      <gp-atom-picture v-bind="picture" />
    </template>
  </gp-layout-default-container>
</template>

<script>
import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import gpAtomPicture from '@/components/atoms/PictureStatic';

export default {
  components: {
    gpLayoutDefaultContainer,
    gpAtomPicture
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
            { 'media': 'default', 'srcset': 'img/sample-a-16-9/576x324.jpg' },
            { 'media': 'xs', 'srcset': 'img/sample-a-16-9/768x432.jpg' },
            { 'media': 'sm', 'srcset': 'img/sample-a-16-9/992x558.jpg' },
            { 'media': 'md', 'srcset': 'img/sample-a-16-9/1200x675.jpg' },
            { 'media': 'lg', 'srcset': 'img/sample-a-16-9/1600x900.jpg' },
            { 'media': 'xl', 'srcset': 'img/sample-a-16-9/1920x1080.jpg' },
          ]
        };
      }
    }

  }

};
</script>

<style lang="postcss">
.gp-organism-stage-image {
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
