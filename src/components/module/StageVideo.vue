<template>
  <base-layout-lost-container class="organism-stage-video">
    <template #background>
      <element-responsive-video v-if="video" v-bind="video" />
    </template>
  </base-layout-lost-container>
</template>

<script setup>
defineProps({
  video: {
    type: Object,
    required: false,
    default() {
      return {
        poster: {
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
.organism-stage-video {
  &:first-child {
    margin-top: 0;
  }

  position: relative;
  width: 100%;
}
</style>
