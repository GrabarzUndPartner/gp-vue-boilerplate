<template>
  <layout-lost-container
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
  </layout-lost-container>
</template>

<script>

import LayoutLostContainer from '@/components/layouts/LostContainer';

export default {

  components: { LayoutLostContainer },

  props: {

    options: {
      type: Object,
      default () {
        return {};
      }
    },

    mirror: {
      type: Boolean,
      default () {
        return false;
      }
    }

  },

  computed: {
    styleClasses () {
      return {
        'column-align--left': !this.mirror,
        'column-align--right': this.mirror
      };
    }
  }

};
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

  &.column-align--left {
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

  &.column-align--right {
    & .lost-flex-container {
      /* stylelint-disable-next-line no-descending-specificity */
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
