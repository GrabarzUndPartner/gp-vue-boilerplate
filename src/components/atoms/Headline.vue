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

<story
  name="Headline"
  group="Atoms"
  knobs="{
    tag: {
      default: select('Type', {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6'
      }, 'h2')
    },
    overline: {
      default: text('Overline', 'Lorem ipsum')
    },
    headline: {
      default: text('Headline', 'Lorem ipsum')
    },
    subline: {
      default: text('Subline', 'Lorem ipsum')
    }
  }"
  >
  <headline :tag="tag" :overline="overline" :headline="headline" :subline="subline"/>
</story>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default () {
        return 'h1';
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

      @nest .font_amatic-sc .js--visible & {
        font-family: "Amatic SC", serif;
      }

      @nest .font_amatic-sc_700_normal .js--visible & {
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
