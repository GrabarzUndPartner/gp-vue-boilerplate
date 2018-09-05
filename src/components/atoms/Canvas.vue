<template>
  <canvas
    :width="width"
    :height="height"/>
</template>

<script>
import greyscale from '../../filter/greyscale.js';

export default {
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      context: null
    };
  },
  mounted() {
    this.context = this.$el.getContext('2d');
  },
  destroyed() {
    console.log('DESTROY BASE');
  },
  methods: {
    update(source) {
      this.context.drawImage(source, 0, 0, this.width, this.height);
      let filter = greyscale(this.getImageData());
      this.context.putImageData(filter, 0, 0);
    },

    getImageData() {
      return this.context.getImageData(0,0, this.width, this.height);
    }
  }
};
</script>

<style lang="postcss">
</style>
