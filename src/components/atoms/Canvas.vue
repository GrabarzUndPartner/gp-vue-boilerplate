<template>
  <canvas
    :width="width"
    :height="height"/>
</template>

<script>
import { subscribeThrottle } from '../../services/animationFrame';
import Filter from '../../classes/Filter';

export default {
  props: {
    source: {
      type: global.HTMLCanvasElement,
      default: function () {
        return new global.HTMLCanvasElement();
      }
    },
    filterName: {
      type: String,
      default: 'default'
    }
  },

  data() {
    return {
      context: null,
      width: 0,
      height: 0
    };
  },

  watch: {
    source: {
      handler(source) { this.setup(source); },
      immediate: false
    },
    filterName: {
      handler(filterName) { this.filter = new Filter(filterName); },
      immediate: true
    }
  },

  mounted() {
    this.context = this.$el.getContext('2d');
    this.setup(this.source);
  },

  destroyed() {
    this.result = null;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  },

  methods: {
    setup(source) {
      if (source) {
        const constraints = source.constraints;
        this.filter.setBuffer(createImageBuffer(this.context, constraints.width, constraints.height));
        this.subscription = subscribeThrottle(update.bind(this), constraints.frameRate);
      }
    }
  }
};

function createImageBuffer(context, width, height) {
  const buffer = context.createImageData(width, height);
  buffer.average = [0, 0, 0];
  buffer.count = 0;
  return buffer;
}

function update() {
  this.width = this.source.constraints.width;
  this.height = this.source.constraints.height;

  this.context.putImageData(this.filter.getBuffer(), 0, 0);
  this.filter.send(this.source.data);
}
</script>

<style lang="postcss">
</style>
