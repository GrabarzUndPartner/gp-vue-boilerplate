<template>
  <div>
    <option-canvas
      :source="source"
      :filter="['image/default']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    />

    <!-- <option-canvas
      :source="source"
      :filter="['image/greyscale']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    />

    <option-canvas
      :source="source"
      :filter="['image/labcie']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    />

    <option-canvas
      :source="source"
      :filter="['image/labcie', 'image/contour']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    /> -->

    <option-canvas
      :source="source"
      :filter="['image/clamp-hsl-brightness']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    >
      <template slot="options">
        <drop-down
          :items="[
            { value: 0, label: 'H' },
            { value: 1, label: 'S' },
            { value: 2, label: 'L', selected: true }
          ]"
          prop="channel"
          name="image/clamp-hsl-brightness"/>
        <slider
          :value="50"
          :min="0"
          :max="100"
          name="image/clamp-hsl-brightness"
          prop="threshold"/>
      </template>
    </option-canvas>

    <option-canvas
      :source="source"
      :filter="['image/clamp-hsv-brightness']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    >
      <template slot="options">
        <drop-down
          :items="[
            { value: 0, label: 'H' },
            { value: 1, label: 'S' },
            { value: 2, label: 'V', selected: true }
          ]"
          prop="channel"
          name="image/clamp-hsv-brightness"/>
        <slider
          :value="50"
          :min="0"
          :max="100"
          name="image/clamp-hsv-brightness"
          prop="threshold"/>
      </template>
    </option-canvas>

    <option-canvas
      :source="source"
      :filter="['image/clamp-ohta-brightness']"
      :frame-rate="frameRate"
      :width="width"
      :height="height"
    >
      <template slot="options">
        <drop-down
          :items="[
            { value: 0, label: 'I1', selected: true },
            { value: 1, label: 'I2' },
            { value: 2, label: 'I3' }
          ]"
          prop="channel"
          name="image/clamp-ohta-brightness"/>
        <slider
          :value="200"
          :min="0"
          :max="255"
          name="image/clamp-ohta-brightness"
          prop="threshold"/>
      </template>
    </option-canvas>

    <!-- <option-canvas
      :source="source"
      :filter="['image/lab']"
      :frame-rate="frameRate"
      :width="width"
      :height="height">
      <template slot="options">
        <drop-down
          :items="[
            { value: [0,1,2], label: 'LAB' },
            { value: [0,0,0], label: 'L' },
            { value: [1,1,1], label: 'A' },
            { value: [2,2,2], label: 'B', selected: true }
          ]"
          prop="channels"
          name="image/lab"/></template>
    </option-canvas>

    <option-canvas
      :source="source"
      :filter="['image/lab-false-color']"
      :frame-rate="frameRate"
      :width="width"
      :height="height">
      <template slot="options">
        <drop-down
          :items="[
            { value: 1, label: 'A', selected: true },
            { value: 2, label: 'B' }
          ]"
          prop="channels"
          name="image/lab-false-color"/></template>
    </option-canvas>

    <option-canvas
      :source="source"
      :filter="['image/ohta-false-color']"
      :frame-rate="frameRate"
      :width="width"
      :height="height">
      <template slot="options">
        <drop-down
          :items="[
            { value: 1, label: 'I2', selected: true },
            { value: 2, label: 'I3' }
          ]"
          prop="channels"
          name="image/ohta-false-color"/></template>
    </option-canvas> -->

    <option-canvas
      :source="source"
      :filter="['image/movement']"
      :frame-rate="frameRate"
      :width="width"
      :height="height">
      <template slot="options">
        <slider
          :value="35"
          :min="0"
          :max="70"
          name="image/movement"
          prop="threshold"/>
        <drop-down
          :items="[
            { value: 0, label: '0' },
            { value: 35, label: '35', selected: true }
          ]"
          name="image/movement"
          prop="threshold"/>
      </template>
    </option-canvas>

    <camera
      class="camera"
      @loadedmetadata.native="setup"/>
  </div>
</template>

<script>
import Camera from '../atoms/Camera';
import OptionCanvas from './OptionCanvas';
import DropDown from '../atoms/inputs/DropDown';
import Slider from '../atoms/inputs/Slider';
import { subscribeThrottle } from '../../services/animationFrame';

export default {
  components: {
    Camera,
    OptionCanvas,
    DropDown,
    Slider
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
