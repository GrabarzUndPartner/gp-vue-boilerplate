<template>
  <div>
    <img
      ref="image"
      :src="url"
      @load="onLoad"
    >
    <canvas
      ref="canvas"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
export default {
  components: {

  },

  props: {
    url: {
      type: String,
      default () {
        return '';
      }
    }
  },

  data () {
    return {
      width: 0,
      height: 0
    };
  },

  mounted () {
    this.context = this.$refs.canvas.getContext('2d');
  },

  methods: {
    onLoad () {
      this.width = this.$refs.image.width;
      this.height = this.$refs.image.height;
      this.$emit('image', this.$refs.image);
      this.$nextTick(() => {
        this.context.drawImage(this.$refs.image, 0, 0, this.width, this.height);
        this.$nextTick(() => {
          this.$emit('imagedata', this.context.getImageData(0, 0, this.width, this.height));
        });
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
img {
  width: 100%;
}
</style>
