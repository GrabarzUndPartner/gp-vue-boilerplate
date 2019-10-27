<template>
  <div>
    <atom-cam @loadedmetadata.native="onLoad" />
    <!-- @progress.native="onUpdate" -->
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
    fps: {
      type: Number,
      default () {
        return 60;
      }
    }
  },

  data () {
    return {
      width: 0,
      height: 0,
      video: null,
      lastTime: 0
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
      this.video = e.target;
      this.onUpdate();
    },

    onUpdate (currentTime) {
      global.requestAnimationFrame(this.onUpdate);
      if ((currentTime - this.lastTime) / 1000 >= 1 / this.fps) {
        this.lastTime = currentTime;

        this.context.drawImage(this.video, 0, 0, this.width, this.height);
        setTimeout(() => {
          this.$emit('imagedata', { context: this.context, width: this.width, height: this.height });
        });
      }

    }
  }
};
</script>

<style lang="postcss" scoped>
video,
canvas {
  display: none;
}
</style>
