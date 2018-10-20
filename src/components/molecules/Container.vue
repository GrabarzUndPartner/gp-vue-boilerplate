<template>
  <div>
    <canvas-base
      :source="source"
      :filter="['image/default']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    />
    <canvas-base
      :source="source"
      :filter="['image/movement']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    />
    <!-- <canvas-base
      :source="source"
      :filter="['image/greyscale']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    />
    <!--canvas-base
      :source="source"
      :filter="['image/labcie']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    />
    <canvas-base
      :source="source"
      :filter="['image/labcie', 'image/contour']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    /-->
    <canvas-channels
      :items="[
        { value: [0,1,2], label: 'LAB' },
        { value: [0,0,0], label: 'L' },
        { value: [1,1,1], label: 'A' },
        { value: [2,2,2], label: 'B', selected: true }
      ]"
      name="image/lab">
      <template
        slot="canvas"
        slot-scope="props">
        <canvas-base
          :source="source"
          :options="props.options"
          :filter="['image/lab']"
          :frame-rate="frameRate"
          :width="width"
          :height="height"/>
      </template>
    </canvas-channels> -->

    <canvas-channels
      :items="[
        { value: 1, label: 'A', selected: true },
        { value: 2, label: 'B' }
      ]"
      name="image/lab-false-color">
      <template
        slot="canvas"
        slot-scope="props">
        <canvas-base
          :source="source"
          :options="props.options"
          :filter="['image/lab-false-color']"
          :width="width"
          :height="height"/>
      </template>
    </canvas-channels>

    <canvas-channels
      :items="[
        { value: 1, label: 'I2', selected: true },
        { value: 2, label: 'I3' }
      ]"
      name="image/ohta-false-color">
      <template
        slot="canvas"
        slot-scope="props">
        <canvas-base
          :source="source"
          :options="props.options"
          :filter="['image/ohta-false-color']"
          :width="width"
          :height="height"/>
      </template>
    </canvas-channels>

    <camera
      class="camera"
      @loadedmetadata.native="setup"/>
  </div>
</template>

<script>
import Camera from '../atoms/Camera';
import CanvasBase from '../atoms/Canvas';
import CanvasChannels from './CanvasChannels';
import { subscribeThrottle } from '../../services/animationFrame';

export default {
  components: {
    Camera,
    CanvasBase,
    CanvasChannels
  },

  props: {
    width: {
      type: Number,
      default: 160
    }
  },

  data() {
    return {
      source: null,
      height: 0,
      frameRate: null
    };
  },

  destroyed() {
    this.video = null;
    this.source = null;
    this.context = null;
    this.height = null;
    this.frameRate = null;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  },

  methods: {
    setup(e) {
      this.video = e.target;
      this.source = document.createElement('canvas');
      this.context = this.source.getContext('2d');
      this.frameRate = this.video.constraints.frameRate;
      this.subscription = subscribeThrottle(renderUpdate.bind(this), measureUpdate.bind(this), this.video.constraints.frameRate);
    }
  }
};

function renderUpdate() {
  this.source.width = this.width;
  this.source.height = this.height;
  this.context.drawImage(this.video, 0, 0, this.width, this.height);
}

function measureUpdate() {
  this.height = (this.video.constraints.height / this.video.constraints.width) * this.width;
  this.source.data = this.context.getImageData(0, 0, this.width, this.height);
}
</script>

<style lang="postcss" scoped>
.camera {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 1px;
}
</style>
