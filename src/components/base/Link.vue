<template>
  <nuxt-link
    v-slot="{ href, navigate, isActive, isExactActive }"
    custom
    :to="to"
    :prefetch="!isExternal(to)">
    <span
      v-if="!isExternal && isExactActive"
      :class="{
        'nuxt-link-active': isActive,
        'nuxt-link-exact-active': isExactActive
      }"
      ><slot name="default">{{ $attrs.title }}</slot></span
    >
    <a
      v-else
      :href="!disabled && getHref(href)"
      :disabled="disabled"
      v-bind="{ ...$attrs, to: undefined }"
      :class="{
        'nuxt-link-active': isActive,
        'nuxt-link-exact-active': isExactActive
      }"
      v-on="listeners(navigate, isExternal(getHref(href)))">
      <slot name="default" v-bind="{ isActive, isExactActive }">{{
        $attrs.title
      }}</slot>
    </a>
  </nuxt-link>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    to: {
      type: [Object, String],
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    external: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    isExternal(href) {
      return (
        typeof href === 'string' && /^((https?:\/\/)|mailto:|tel:)/.test(href)
      );
    },

    getHref(href) {
      if (this.external || this.isExternal(this.to)) {
        return this.to;
      }
      return href;
    },

    listeners(navigate, external) {
      navigate = this.disabled || external ? () => {} : navigate;
      const clickEvent = this.$attrs.onClick;

      return Object.assign({}, this.$attrs, {
        onClick: (...args) => {
          const v = clickEvent && clickEvent(...args);
          if (!clickEvent || v || v === undefined) {
            navigate(...args);
          }
        },
        'keypress.enter': navigate
      });
    }
  }
};
</script>
