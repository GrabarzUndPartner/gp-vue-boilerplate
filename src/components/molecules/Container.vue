<template>
  <div>
    <canvas-base
      ref="debug"
      :source="source"
      :filter-pipeline="['image/default']"
      :width="width"
      :height="height"
      class="debug"/>
    <canvas-base
      :source="source"
      :filter-pipeline="['image/greyscale']"
      :width="width"
      :height="height"
      class="debug"/>
    <canvas-base
      :source="source"
      :filter-pipeline="['image/labcie']"
      :width="width"
      :height="height"
      class="debug"/>
    <canvas-base
      ref="debug"
      :source="source"
      :filter-pipeline="['image/labcie', 'image/contour']"
      :width="width"
      :height="height"
      class="debug"/>
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
      source: null,
      width: 0,
      height: 0
    };
  },
  mounted() {

  },
  destroyed() {
    this.subscription.unsubscribe();
  },
  methods: {
    setup(e) {
      this.video = e.target;
      this.source = document.createElement('canvas');
      this.context = this.source.getContext('2d');
      this.subscription = subscribeThrottle(renderUpdate.bind(this), measureUpdate.bind(this), this.video.constraints.frameRate);
    }
  }
};

function renderUpdate() {
  this.context.drawImage(this.video, 0, 0, this.width, this.height);
}

function measureUpdate() {
  this.width = this.video.constraints.width;
  this.height = this.video.constraints.height;
  this.source.data = this.context.getImageData(0, 0, this.width, this.height);
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
