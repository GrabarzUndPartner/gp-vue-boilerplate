<template>
  <content-headline class="element-headline">
    <slot>
      <span
        v-if="$slots.overline || overline"
        v-font="$getFont('Raleway')"
        class="overline"
      >
        <slot name="overline-slot">
          {{ overline }}
        </slot>
      </span>
      <span
        v-if="$slots.default || content"
        v-font="$getFont('Roboto Slab', 700)"
        class="headline"
      >
        <slot name="headline-slot">
          {{ content }}
        </slot>
      </span>
      <span
        v-if="$slots.subline || subline"
        v-font="$getFont('Raleway', 700)"
        class="subline"
      >
        <slot name="subline-slot">
          {{ subline }}
        </slot>
      </span>
    </slot>
  </content-headline>
</template>

<script setup>
import { ContentHeadline } from 'vue-semantic-structure';
import { useBoosterFonts } from '#imports';

const { $getFont } = useBoosterFonts();

defineProps({
  tag: {
    type: String,
    default: 'h1'
  },
  overline: {
    type: String,
    default: 'Lorem Overline'
  },
  content: {
    type: String,
    default: 'Lorem Headline'
  },
  subline: {
    type: String,
    default: 'Lorem Subline'
  }
});
</script>

<style lang="postcss" scoped>
.element-headline {
  margin: 0;
  line-height: 1.5;

  & > * {
    display: block;
  }

  /* ########## */

  &h2 {
    & .overline {
      font-size: calc(12 / 375 * 100vw);

      @media (--xs) {
        font-size: 12px;
      }
    }

    & .subline {
      font-size: calc(16 / 375 * 100vw);

      @media (--xs) {
        font-size: 16px;
      }
    }

    & .headline {
      font-size: calc(36 / 375 * 100vw);

      @media (--xs) {
        font-size: 36px;
      }
    }
  }
}
</style>
