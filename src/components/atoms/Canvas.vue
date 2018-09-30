<template>
  <canvas
    :width="width"
    :height="height"/>
</template>

<script>
import { render, measure } from '../../services/animationFrame';
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
      type: Array,
      default: function () {
        return ['image/default'];
      }
    }
  },

  data() {
    return {
      width: 0,
      height: 0
    };
  },

  watch: {
    source: {
      handler(source) { this.setup(source); },
      immediate: false
    }
  },

  mounted() {
    this.context = this.$el.getContext('2d');
    this.setup(this.source);
  },

  destroyed() {
    this.result = null;
    if (this.subscription) {
      this.renderSubscription.unsubscribe();
      this.measureSubscription.unsubscribe();
    }
  },

  methods: {
    setup(source) {
      if (source) {
        const constraints = source.constraints;

        this.filter = new Filter(this.filterName);
        this.filter.setBuffer(this.context.createImageData(constraints.width, constraints.height));

        this.renderSubscription = render.subscribe(renderUpdate.bind(this));
        this.measureSubscription = measure.subscribe(measureUpdate.bind(this));
      }
    }
  }
};

function renderUpdate() {
  if (this.filter.updated) {
    this.context.putImageData(this.filter.getBuffer(), 0, 0);
  }
}

function measureUpdate() {
  this.width = this.source.constraints.width;
  this.height = this.source.constraints.height;
  this.filter.send(this.source.data);
}
</script>

<style lang="postcss">
</style>
