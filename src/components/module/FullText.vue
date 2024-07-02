<template>
  <base-layout-lost-container class="organism-full-text">
    <molecule-content v-bind="article" />
  </base-layout-lost-container>
</template>

<script setup>
useBoosterCritical();

defineProps({
  article: {
    type: Object,
    default() {
      return {
        headline: {
          overline: 'Text Overline',
          headline: 'Text Headline',
          subline: 'Text Subline'
        },
        content: '<p>Example Text</p>'
      };
    }
  }
});
</script>

<style lang="postcss" scoped>
.organism-full-text {
  /* empty */
}
</style>
