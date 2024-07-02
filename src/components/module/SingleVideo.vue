<template>
  <base-layout-lost-container class="organism-single-video">
    <template #container>
      <element-responsive-video v-bind="video" />
    </template>
  </base-layout-lost-container>
</template>

<script setup>
defineProps({
  video: {
    type: Object,
    default() {
      return {
        poster: {
          title: 'Text Image',
          alt: 'Text Image',
          sources: [
            {
              src: '/img/sample-a-16-9.jpg',
              sizes: {
                default: '100vw',
                xxs: '100vw',
                xs: '100vw',
                sm: '100vw',
                md: '100vw',
                lg: '100vw',
                xl: '100vw',
                xxl: '100vw'
              }
            }
          ]
        }
      };
    }
  }
});
</script>

<style lang="postcss" scoped>
.organism-single-video {
  /* empty */
}
</style>
