<template>
  <ul>
    <li
      v-for="(item) in list"
      :key="item.title"
    >
      <nuxt-link :to="localePath(item.url)">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    }
  },
};
</script>

<style module>
:global(a.nuxt-link-active) {
  color: green;
}

a {
  line-height: 2em;
  color: black;
}
</style>
