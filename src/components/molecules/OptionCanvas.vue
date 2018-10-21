<template>
  <div
    :style="{width: width + 'px'}"
    class="group">
    <label>{{ filter }}</label>
    <canvas-base
      :source="source"
      :filter="filter"
      :frame-rate="frameRate"
      :options="config"
      :width="width"
      :height="height"
    />
    <slot name="options"/>
  </div>
</template>

<script>
import CanvasBase from '../atoms/Canvas';

export default {
  components: {
    CanvasBase
  },
  props: {
    source: {
      type: global.HTMLCanvasElement,
      default() {
        return new global.HTMLCanvasElement();
      }
    },
    filter: {
      type: Array,
      default() {
        return ['image/default'];
      }
    },
    frameRate: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      config: {}
    };
  },
  mounted() {
    this.$on('change', (option) => this.changeOption(option));
  },
  methods: {
    changeOption(e) {
      this.config = e;
    }
  }
};
</script>

<style lang="postcss">
div.group {
  padding: 5px;
  border: 1px solid grey;

  canvas {
    display: block;
  }
}
</style>
