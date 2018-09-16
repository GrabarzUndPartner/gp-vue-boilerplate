<template>
  <div>

    <no-ssr>
      <canvas-base
        :source="source"
        filter-name="default"
        class="debug"/>
    </no-ssr>
    <no-ssr>
      <canvas-base
        :source="source"
        filter-name="greyscale"
        class="debug"/>
    </no-ssr>
    <no-ssr>
      <canvas-base
        ref="debug"
        :source="source"
        filter-name="lab"
        class="debug"/>
    </no-ssr>
    <camera
      class="camera"
      @loadedmetadata.native="setup"/>
  </div>
</template>

<script>
import Camera from '../atoms/Camera';
import CanvasBase from '../atoms/Canvas';
import { subscribeThrottle } from '../../services/animationFrame';

export default {
  components: {
    Camera,
    CanvasBase
  },

  data() {
    return {
      source: null
    };
  },
  mounted() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
  },
  destroyed() {
    this.subscription.unsubscribe();
  },
  methods: {
    setup(e) {
      this.video = e.target;
      this.canvas.constraints = e.target.constraints;
      this.source = this.canvas;
      this.subscription = subscribeThrottle(update.bind(this), this.canvas.constraints.frameRate);
    }
  }
};

function update() {
  this.canvas.width = this.video.constraints.width;
  this.canvas.height = this.video.constraints.height;
  // this.canvas.constraints = this.video.constraints;
  this.context.drawImage(this.video, 0, 0);
  this.canvas.data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
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
