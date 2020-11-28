<template>
  <component
    :is="tag"
    class="atom-headline"
    :class="styleClasses"
  >
    <slot>
      <span
        v-if="$slots.overline || overline"
        class="overline"
      >
        <slot name="overline-slot">
          {{ overline }}
        </slot>
      </span>
      <span
        v-if="$slots.headline || headline"
        class="headline"
      >
        <slot name="headline-slot">
          {{ headline }}
        </slot>
      </span>
      <span
        v-if="$slots.subline || subline"
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
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  & > * {
    display: block;
  }

  /* ########## */

  &.headline--h1 {
    /* empty */
  }

  &.headline--h2 {
    & .overline,
    & .subline {
      font-size: calc(12 / 375 * 100vw);
      font-weight: normal;

      @media (--xs) {
        font-size: 12px;
      }

      @nest .font_raleway .js--visible & {
        font-family: "Raleway", sans-serif;
      }
    }

    & .subline {
      @nest .font_raleway_500_normal .js--visible & {
        font-weight: 500;
      }
    }

    & .headline {
      font-size: calc(36 / 375 * 100vw);

      @media (--xs) {
        font-size: 36px;
      }

      @nest .font_amatic_sc .js--visible & {
        font-family: "Amatic SC", serif;
      }

      @nest .font_amatic_sc_700_normal .js--visible & {
        font-weight: 700;
      }
    }
  }

  &.headline--h3 {
    /* empty */
  }

  &.headline--h4 {
    /* empty */
  }

  &.headline--h5 {
    /* empty */
  }

  &.headline--h6 {
    /* empty */
  }
}
</style>
