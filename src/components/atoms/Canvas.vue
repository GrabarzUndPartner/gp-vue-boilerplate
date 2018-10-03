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
    filterOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    filterPipeline: {
      type: Array,
      default: function () {
        return ['image/default'];
      }
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
    return {};
  },

  watch: {
    source: {
      handler(source) { this.setup(source); },
      immediate: false
    },
    width: {
      handler() {
        this.updateFilter();
      }
    },
    height: {
      handler() {
        this.updateFilter();
      }
    },
    filterOptions: {
      handler(value) {
        this.updateFilterOptions(value);
      }
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
        this.filter = new Filter(this.filterPipeline);
        this.updateFilter();

        this.renderSubscription = render.subscribe(renderUpdate.bind(this));
        this.measureSubscription = measure.subscribe(measureUpdate.bind(this));
      }
    },
    updateFilter() {
      if (this.width && this.height) {
        this.filter.setBuffer(this.context.createImageData(this.width, this.height));
      }
    },
    updateFilterOptions(value) {
      this.filter.setOptions(value);
    }
  }
};

function renderUpdate() {
  if (this.filter && this.filter.updated) {
    this.context.putImageData(this.filter.getBuffer(), 0, 0);
  }
}

function measureUpdate() {
  this.filter.send(this.source.data);
}
</script>

<style lang="postcss">
</style>
