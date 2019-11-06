<template>
  <div class="gp-organism-stage">
    <gp-atom-picture v-bind="picture" />
  </div>
</template>

<script>
import gpAtomPicture from '@/components/atoms/PictureStatic';

export default {
  components: {
    gpAtomPicture
  },

  props: {

    picture: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            { 'media': 'default', 'srcset': 'img/1/576x324.jpg' },
            { 'media': 'xs', 'srcset': 'img/1/768x432.jpg' },
            { 'media': 'sm', 'srcset': 'img/1/992x558.jpg' },
            { 'media': 'md', 'srcset': 'img/1/1200x675.jpg' },
            { 'media': 'lg', 'srcset': 'img/1/1600x900.jpg' },
            { 'media': 'xl', 'srcset': 'img/1/1920x1080.jpg' },
          ]
        };
      }
    }
  }

};
</script>

<style lang="postcss">
.gp-organism-stage {
  position: relative;
  width: 100%;

  & picture {
    position: relative;
    display: block;

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
}
</style>
