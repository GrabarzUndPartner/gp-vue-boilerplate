<template>
  <div
    ref="scrollContainer"
    class="scroll-container"
    :style="style"
  >
    <slot name="before" />
    <div>
      <div>
        <slot v-bind="{progress}">
          <div class="example-container">
            Container ({{ progress }})
          </div>
        </slot>
      </div>
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import { ipoint, calc } from '@js-basics/vector';
import { getElBounds, getScrollPosition } from '@/utils/dom';

export default {
  props: {
    rows: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      subscriptions: [],
      progress: ipoint(0, 0),
      offset: ipoint(0, 0),
      bounds: {
        position: ipoint(0, 0),
        dimension: ipoint(0, 0)
      }
    };
  },
  computed: {
    style () {
      return {
        '--rows': this.rows,
        ...this.progress.toCSSVars('progress')
      };
    }
  },

  watch: {
    progress () {
      this.$emit('progress', this.progress);
    }
  },

  async mounted () {
    const [
      { resizeObserver },
      { scrollObserver }
    ] = await Promise.all([
      import('@/service/window'),
      import('@/service/scroll')
    ]);
    this.subscriptions = [
      resizeObserver.subscribe(this.onResize.bind(this)),
      scrollObserver.subscribe(this.onScroll.bind(this))
    ];
  },

  destroyed () {
    this.subscriptions.forEach(subscribe => subscribe.unsubscribe());
  },

  methods: {

    onResize () {
      this.bounds = getElBounds(this.$el);
      this.offset = calc(() => this.bounds.position + getScrollPosition());
    },

    onScroll (position) {
      const currentPosition = calc(() => Math.max(position - this.offset, 0));
      this.progress = calc(() => Math.min(currentPosition / (this.bounds.dimension - (this.bounds.dimension / this.rows)), 1));
    }

  }
};

</script>

<style lang="postcss">
.scroll-container {
  position: relative;

  & > div {
    height: calc(var(--rows) * 100vh);

    & > div {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% / var(--rows));
    }
  }
}

.example-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: em(48);
}

</style>
