<template>
  <article>
    <header>
      <gp-atom-headline
        v-bind="headline"
        tag="h2"
      />
    </header>
    <slot />
  </article>
</template>

<script>
import gpAtomHeadline from '@/components/atoms/Headline';

export default {
  components: {
    gpAtomHeadline
  },

  props: {
    headline: {
      type: Object,
      required: false,
      default () {
        return {};
      }
    }
  }
};
</script>

<style>
</style>
