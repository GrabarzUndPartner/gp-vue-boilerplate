<template>
  <ul>
    <slot>
      <li
        v-for="(item) in list"
        :key="item.title"
      >
        <gp-atom-link :url="localePath(item.url)">
          {{ item.title }}
        </gp-atom-link>
      </li>
    </slot>
  </ul>
</template>

<script>
import gpAtomLink from '@/components/atoms/Link';

export default {
  components: {
    gpAtomLink
  },
  props: {
    list: {
      type: Array,
      required: false,
      default: function () {
        return [];
      }
    }
  },
};
</script>

<style lang="postcss">
/* a {
  color: black;

  &.nuxt-link-active {
    color: green;
  }
} */
</style>
