<template>
  <canvas
    :width="width"
    :height="height"/>
</template>

<script>
import { subscribeThrottle } from '../../services/animationFrame';
import { createFilter } from '../../utils/filter.js';

let values = {
  raw: [0, 0, 0],
  result: [0, 0, 0]
};

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
      raw: null,
      result: null,
      width: 0,
      height: 0
    };
  },

  watch: {
    source: {
      handler(source) { console.log('SOURCE CHANGE'); this.setup(source); },
      immediate: false
    },
    filterName: {
      handler(name) { this.filter = createFilter(name); }
    }
  },

  created() {
    this.filter = createFilter(this.filterName);
  },

  updated() {
    console.log('UPDATE');
  },

  mounted() {
    console.log('MOUNTED', this.$el, this.source);
    this.context = this.$el.getContext('2d');
    this.setup(this.source);
  },

  destroyed() {
    this.raw = null;
    this.result = null;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('DESTROY BASE1');
  },

  methods: {
    setup(source) {
      if (source) {
        console.log('SETUP', source, source.constraints);
        let frameRate = this.source.constraints.frameRate;
        let width = source.constraints.width;
        let height = source.constraints.height;

        this.raw = createImageBuffer(this.context, width, height);
        this.result = createImageBuffer(this.context, width, height);
        this.subscription = subscribeThrottle(update.bind(this), frameRate);
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

  this.filter
    .then((filter) => filter(this.source.data, values))
    .then((result) => {
      this.result.data.set(result.data);
      values = result.values;
      this.context.putImageData(this.result, 0, 0);
    });

}
</script>

<style lang="postcss">
</style>
