<template>
  <div
    class="gp-organism-image"
    :class="styleClasses"
  >
    <gp-atom-image v-bind="image" />
  </div>
</template>

<script>
import gpAtomImage from '@/components/atoms/Image';

export default {
  components: {
    gpAtomImage
  },

  props: {

    image: {
      type: Object,
      required: false,
      default () {
        return {
          src: 'https://picsum.photos/id/18/416/234'
        };
      }
    }

  },

  data () {
    return {
      isVisible: process.browser ? true : false
    };
  },

  computed: {
    styleClasses () {
      return { 'js--visible': this.isVisible };
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
