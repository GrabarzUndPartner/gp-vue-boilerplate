<template>
  <component
    :is="tag || `h${contextLevel}`"
    v-bind="$attrs"
    :data-debug="debug"
  >
    <slot />
    <pre v-if="debug" :data-debug-context-level="contextLevel" />
  </component>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useRoute } from '#imports';
const parentLevel = inject('parentLevel', 1);

const contextLevel = computed(() => {
  return getMax((parentLevel - (parentLevel % 2)) / 2);
});

const route = useRoute();

const debug = computed(() => 'debug-headline' in route.query);

defineProps({
  tag: {
    type: String,
    default: null
  }
});

defineOptions({
  inheritAttrs: false
});

function getMax(number) {
  return Math.max(1, Math.min(number, 6));
}
</script>

<style lang="postcss" scoped>
* {
  margin: 0;
}

[data-debug] {
  position: relative;

  & pre {
    position: absolute;
    inset: 0;
    z-index: 10000;
    margin: 0;
    font-family: monospace;
    font-weight: normal;

    &::before {
      position: absolute;
      inset: 0;
      box-sizing: border-box;
      pointer-events: none;
      content: '';
      border: dotted #333 2px;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 10000;
      padding: 5px;
      font-size: 13px;
      color: white;
      letter-spacing: 0.1em;
      content: 'H' attr(data-debug-context-level);
      background: #333;
    }
  }
}
</style>
