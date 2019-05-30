<template>
  <article>
    <gp-headline>
      {{ headline }}
    </gp-headline>
    <gp-subline>
      {{ subline }}
    </gp-subline>
    <slot />
  </article>
</template>

<script>
import gpHeadline from '@/components/atoms/headline/Article';
import gpSubline from '@/components/atoms/subline/Article';

export default {
  components: {
    gpHeadline,
    gpSubline
  },

  props: {
    headline: {
      type: String,
      default () {
        return '';
      }
    },
    subline: {
      type: String,
      default () {
        return '';
      }
    }
  }
};
</script>

<style>
</style>
