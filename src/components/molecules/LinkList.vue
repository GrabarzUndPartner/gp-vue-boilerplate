<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="`${index}_${timestamp}`"
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
      default: function () {
        return [];
      }
    }
  },

  data () {
    return {
      timestamp: Date.now()
    };
  }
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
