<template>
  <component :is="currentTag" v-bind="$attrs" :data-debug="debug">
    <slot name="before" />
    <header v-if="$slots.header || $slots.header">
      <slot name="header" />
    </header>
    <slot />
    <footer v-if="$slots.footer || $slots.footer">
      <slot name="footer" />
    </footer>
    <slot name="after" />
    <pre
      v-if="debug"
      class="structure-debug"
      :data-debug-parent-level="parentLevel"
      :data-debug-level="currentLevel"
      :data-debug-tag="currentTag"
    />
  </component>
</template>

<script setup>
import { provide, inject, computed } from 'vue';
import { useRoute } from '#imports';

defineOptions({
  inheritAttrs: false
});

const props = defineProps({
  tag: {
    type: String,
    default: null
  },
  tags: {
    type: Array,
    default() {
      return ['article', 'section'];
    }
  },
  tagStructure: {
    type: Array,
    default() {
      return ['div', 'main', 'div'];
    }
  },
  level: {
    type: Number,
    default: undefined
  }
});

const parentLevel = inject('parentLevel', 0);

const route = useRoute();

const debug = computed(() => 'debug-structure' in route.query);

const currentLevel = computed(() => {
  return props.level !== undefined ? props.level : parentLevel + 1;
});

const currentTag = computed(() => {
  return (
    props.tag ||
    props.tagStructure[Number(parentLevel)] ||
    props.tags[currentLevel.value % props.tags.length]
  );
});

provide('parentLevel', currentLevel.value);
</script>

<style lang="postcss" scoped>
[data-debug] {
  --color-structure-1-bg: #ff8360ff;
  --color-structure-1-fb: #333;
  --color-structure-2-bg: #e8e288ff;
  --color-structure-2-fb: #333;
  --color-structure-3-bg: #7dce82ff;
  --color-structure-3-fb: #333;
  --color-structure-4-bg: #ce5374;
  --color-structure-4-fb: #333;
  --color-structure-5-bg: #dbbbf5;
  --color-structure-5-fb: #333;

  position: relative;

  & .structure-debug {
    position: absolute;
    inset: 0;
    z-index: 10000;
    box-sizing: border-box;
    margin: 0;
    pointer-events: none;

    &::before {
      position: absolute;
      inset: 0;
      z-index: 10000;
      box-sizing: border-box;
      pointer-events: none;
      content: '';
      border: solid var(--tag-color-bg) 4px;
    }

    &::after {
      position: absolute;
      z-index: 10000;
      padding: 0.8em 0.4em;
      font-family: monospace;
      font-size: 11px;
      font-weight: bold;
      color: var(--tag-color-fg);
      pointer-events: none;
      content: attr(data-debug-tag) ' - pLevel: ' attr(data-debug-parent-level)
        ' - Level: ' attr(data-debug-level);
      background: var(--tag-color-bg);
    }
  }
}

.structure-debug[data-debug-tag='article'] {
  --tag-color-fg: var(--color-structure-2-fg);
  --tag-color-bg: var(--color-structure-2-bg);

  &::after {
    top: 0;
    right: 0;
  }
}

.structure-debug[data-debug-tag='section'] {
  --tag-color-fg: var(--color-structure-3-fg);
  --tag-color-bg: var(--color-structure-3-bg);

  &::after {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

.structure-debug[data-debug-tag='nav'] {
  --tag-color-fg: var(--color-structure-4-fg);
  --tag-color-bg: var(--color-structure-4-bg);

  &::after {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

.structure-debug[data-debug-tag='main'] {
  --tag-color-fg: var(--color-structure-1-fg);
  --tag-color-bg: var(--color-structure-1-bg);

  &::after {
    bottom: 0;
    left: 0;
  }
}

.structure-debug[data-debug-tag='div'] {
  --tag-color-fg: var(--color-structure-5-fg);
  --tag-color-bg: var(--color-structure-5-bg);

  &::after {
    top: 0;
    left: 0;
  }
}
</style>
