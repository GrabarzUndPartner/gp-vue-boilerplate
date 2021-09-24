<template>
  <component
    :is="tag"
    class="layouts-default-container"
  >
    <slot name="background" />
    <slot name="container">
      <div
        v-if="$slots.default"
        class="lost-flex-container"
      >
        <slot />
      </div>
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
        return 'div';
      }
    }
  }
};

</script>

<style lang="postcss">
.layouts-default-container {
  margin: 40px 0;

  &:first-child {
    margin-top: 0;
  }

  & .lost-flex-container {
    display: flex;

    @media (--xs) {
      lost-center: 540px;
    }

    @media (--default-max) {
      padding: 0 $lost-gutter;
    }

    @media (--sm) {
      lost-center: 720px;
    }

    @media (--md) {
      lost-center: 960px;
    }

    @media (--lg) {
      lost-center: 1140px;
    }
  }
}
</style>
