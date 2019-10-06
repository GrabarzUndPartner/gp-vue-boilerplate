<template>
  <div>
    <atom-cam
      @loadedmetadata.native="onLoad"
      @progress.native="onUpdate"
    />
    <canvas
      ref="canvas"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import AtomCam from '@/components/atoms/Cam';

export default {
  components: {
    AtomCam
  },

  props: {

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
    onLoad (e) {
      this.width = e.target.videoWidth;
      this.height = e.target.videoHeight;
      this.$emit('load', { width: this.width, height: this.height });
    },

    onUpdate (e) {
      this.context.drawImage(e.target, 0, 0, this.width, this.height);
      this.$emit('imagedata', this.context.getImageData(0, 0, this.width, this.height));
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>
