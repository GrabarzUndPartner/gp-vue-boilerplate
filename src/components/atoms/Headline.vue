<template>
  <component
    :is="tag"
    class="gp-atom-headline"
    :class="styleClasses"
  >
    <slot>
      <span
        v-if="$slots.overline || overline"
        class="overline"
      >
        <slot name="overline">
          {{ overline }}
        </slot>
      </span>
      <span
        v-if="$slots.headline || headline"
        class="headline"
      >
        <slot name="headline">
          {{ headline }}
        </slot>
      </span>
      <span
        v-if="$slots.subline || subline"
        class="subline"
      >
        <slot name="subline">
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
      required: false,
      default () {
        return 'Lorem Overline';
      }
    },
    overline: {
      type: String,
      required: false,
      default () {
        return 'Lorem Overline';
      }
    },
    headline: {
      type: String,
      required: false,
      default () {
        return 'Lorem Headline';
      }
    },
    subline: {
      type: String,
      required: false,
      default () {
        return 'Lorem Subline';
      }
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
.gp-atom-headline {
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
      font-size: 12px;
      font-weight: normal;

      @nest .font_raleway .js--visible & {
        font-family: "Raleway", serif;
      }
    }

    & .subline {
      @nest .font_raleway_500 .js--visible & {
        font-weight: 500;
      }
    }

    & .headline {
      font-size: 36px;

      @nest .font_amatic-sc .js--visible & {
        font-family: "Amatic SC", serif;
      }

      @nest .font_amatic-sc_700 .js--visible & {
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
