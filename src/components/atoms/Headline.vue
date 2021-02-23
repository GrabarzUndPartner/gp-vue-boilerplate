<template>
  <component
    :is="tag"
    class="atom-headline"
    :class="styleClasses"
  >
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
        v-if="$slots.headline || headline"
        v-font="$getFont('Roboto Slab', 700)"
        class="headline"
      >
        <slot name="headline-slot">
          {{ headline }}
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
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    overline: {
      type: String,
      default: 'Lorem Overline'
    },
    headline: {
      type: String,
      default: 'Lorem Headline'
    },
    subline: {
      type: String,
      default: 'Lorem Subline'
    }
  },
  computed: {
    styleClasses () {
      const classes = {};
      classes[`headline--${this.tag}`] = true;
      return classes;
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-headline {
  margin: 0;
  line-height: 1.5;

  & > * {
    display: block;
  }

  /* ########## */

  &.headline--h1 {
    /* empty */
  }

  &.headline--h2 {
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
