<template>
  <div>
    <!-- <canvas-greyscale
      ref="test"
      :width="width"
      :height="height"/> -->
    <canvas-base
      ref="debug"
      :width="width"
      :height="height"
      class="debug"/>
    <camera
      class="camera"
      @play.native="start"/>
  </div>
</template>

<script>
import Camera from '../atoms/Camera';
import CanvasBase from '../atoms/Canvas';

export default {
  components: {
    Camera,
    CanvasBase
  },
  data() {
    return {
      loop: null,
      step: 0,
      width: 0,
      height: 0,
      canvasComponents: []
    };
  },
  mounted() {


  },
  destroyed() {
    this.stop();
  },
  methods: {
    start(e) {
      this.source = e.target;
      this.stop();
      this.loop = window.requestAnimationFrame(animationFrame.bind(this));
    },
    stop() {
      window.cancelAnimationFrame(this.loop);
    }
  }
};

function animationFrame(time) {
  this.loop = window.requestAnimationFrame(animationFrame.bind(this));
  const currentStep = Math.round(time / (1000 / this.source.constraints.frameRate));
  if(currentStep > this.step) {
    this.step = currentStep;
    this.width = this.source.constraints.width;
    this.height = this.source.constraints.height;
    this.$refs.debug.update(this.source);
  }
}
</script>

<style lang="postcss" scoped>
.camera {
  position: fixed;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
}
</style>
