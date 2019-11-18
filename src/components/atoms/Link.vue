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
      type: String,
      required: false,
      default: 'http://example.com'
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    target: {
      type: String,
      required: false,
      default: '_blank'
    }
  },

  computed: {
    isExternal: function () {
      return this.url.match(/^(http(s)?|ftp):\/\//) || this.url.match(/^#/);
    }
  }
};
</script>
