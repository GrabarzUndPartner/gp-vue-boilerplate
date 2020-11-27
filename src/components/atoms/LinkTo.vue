<template>
  <a
    v-if="isExternal"
    :href="url"
    :target="target || '_blank'"
    rel="noopener"
    :title="title"
  >
    <slot>{{ title }}</slot>
  </a>
  <nuxt-link
    v-else-if="!isExternal"
    :to="url"
    :title="title"
  >
    <slot>{{ title }}</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: [
        // Type Object for Route Objects { path: '/page' }
        String, Object
      ],
      default: '#'
    },
    title: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_blank'
    }
  },

  computed: {
    isExternal () {
      if (typeof this.url === 'string') {
        return /^(http(s)?|ftp):\/\//.test(this.url) || this.url.startsWith('#');
      }
      return false;
    }
  }
};
</script>
