<template>
  <div>
    <el-cascader
      :options="options"
      v-model="selectedOptions"
      size="small"
      @change="changeFilter"/>
    <!-- <canvas-base
      :source="source"
      :filter-options="filterOptions"
      :filter-pipeline="['image/default']"
      :width="width"
      :height="height"
      class="debug"/> -->
    <!-- <canvas-base
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
      class="debug"/> -->
    <canvas-base
      ref="debug"
      :source="source"
      :filter-options="filterOptions"
      :filter-pipeline="['image/lab']"
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
      height: 0,
      filterOptions: {
        lab: [0, 1, 2]
      },
      options: [{
        id: 0,
        value: '[0,1,2]',
        label: 'LAB'
      }, {
        id: 1,
        value: '[0,0,0]',
        label: 'L'
      }, {
        id: 2,
        value: '[1,1,1]',
        label: 'A'
      }, {
        id: 3,
        value: '[2,2,2]',
        label: 'B'
      }],
      selectedOptions: ['[0,1,2]']
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

    },

    changeFilter(e) {
      this.filterOptions = { 'image/lab': { channels: JSON.parse(e[0]) } };
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
