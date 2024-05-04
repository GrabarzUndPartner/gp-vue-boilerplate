<template>
  <base-layout-lost-container
    class="layout-two-column-container"
    :class="styleClasses"
    :visible="options.visible"
  >
    <template #background>
      <slot name="background" />
    </template>
    <template #container>
      <div class="lost-flex-container">
        <div>
          <slot name="left" />
        </div>
        <div>
          <slot name="right" />
        </div>
      </div>
    </template>
  </base-layout-lost-container>
</template>

<script setup>
import { computed } from 'vue';
import BaseLayoutLostContainer from '@/components/base/layout/LostContainer';

const props = defineProps({
  options: {
    type: Object,
    default() {
      return {};
    }
  },

  mirror: {
    type: Boolean,
    default() {
      return false;
    }
  }
});

const styleClasses = computed(() => ({
  mirror: props.mirror
}));
</script>

<style lang="postcss">
.layout-two-column-container {
  & .lost-flex-container {
    align-items: center;

    @media (--xs-max) {
      flex-direction: column;
    }

    & > div {
      lost-column: 12/12 0 0;

      @media (--sm) {
        lost-column: 6/12;
      }
    }
  }

  &:not(.mirror) {
    & .lost-flex-container {
      & > div {
        &:first-child {
          order: 0;
        }

        &:last-child {
          order: 1;
        }
      }
    }
  }

  &.mirror {
    & .lost-flex-container {
      & > div {
        &:first-child {
          order: 1;
        }

        &:last-child {
          order: 0;
        }
      }
    }
  }
}
</style>
