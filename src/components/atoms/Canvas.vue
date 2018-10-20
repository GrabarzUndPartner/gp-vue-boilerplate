<template>
  <canvas
    :width="width"
    :height="height"/>
</template>

<script>
import { subscribeThrottle } from '../../services/animationFrame';
import Filter from '../../classes/Filter';

const filter = Symbol('filter');

export default {
  props: {
    source: {
      type: global.HTMLCanvasElement,
      default() {
        return new global.HTMLCanvasElement();
      }
    },
    options: {
      type: Object,
      default() {
        return {};
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
      context: null
    };
  },

  watch: {
    source: {
      handler() {
        this.setup();
      },
      immediate: false
    },
    context: {
      handler() {
        this.setup();
      }
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
    options: {
      handler() {
        this.updateOptions();
      },
      immediate: false
    }
  },

  mounted() {
    this.context = this.$el.getContext('2d');
    this[filter] = new Filter(this.filter);
  },

  destroyed() {
    this.result = null;
    this.unsubscribe();
  },

  methods: {
    setup() {
      this.updateFilter();
      this.updateOptions();
      this.subscribe();
    },

    updateFilter() {
      if (this[filter] && this.context && this.width && this.height) {
        this[filter].setBuffer(this.context.createImageData(this.width, this.height));
      }
    },

    updateOptions() {
      this[filter].setOptions(this.options);
    },

    subscribe() {
      this.unsubscribe();
      this.subscription = subscribeThrottle(renderUpdate.bind(this), measureUpdate.bind(this), this.frameRate);
    },

    unsubscribe() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }
};

function renderUpdate() {
  if (this[filter] && this[filter].updated) {
    this.context.putImageData(this[filter].getBuffer(), 0, 0);
  }
}

function measureUpdate() {
  if (this.source) {
    this[filter].send(this.source.data);
  }
}
</script>

<style lang="postcss">
</style>
