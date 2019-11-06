<template>
  <div class="gp-atom-rich-text">
    <div
      v-if="!$slots.default"
      v-html="content"
    />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: false,
      default: '<p>Reiciendis mollis omnis aut aptent, bibendum, est litora totam tortor.</p><p>Omnis egestas! Doloribus eu aliqua laudantium congue laudantium! Praesent eligendi.</p>'
    }
  }
};
</script>

<style lang="postcss" scoped>
.gp-atom-rich-text {
  font-family: serif;
  font-weight: 400;

  @nest .font_raleway_400 .js--visible {
    font-family: "Raleway", serif;
  }
}
</style>
