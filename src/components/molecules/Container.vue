<template>
  <div>
    <camera
      class="camera"
      @loadedmetadata.native="setup"
      @play.native="start"/>
    <!-- <canvas-greyscale
      ref="test"
      :width="width"
      :height="height"/> -->
    <no-ssr>
      <canvas-base
        ref="debug"
        :source="source"
        class="debug"/>
    </no-ssr>

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
      source: null,
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
    setup(e) {
      this.source = e.target;
    },
    start() {
      // this.stop();
    },
    stop() {
      // if (this.subscription) {
      //   this.subscription.unsubscribe();
      // }
    }
  }
};
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
