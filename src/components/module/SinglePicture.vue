<template>
  <base-layout-lost-container class="organism-picture">
    <template #container>
      <booster-picture v-bind="picture" />
    </template>
  </base-layout-lost-container>
</template>

<script setup>
import BoosterPicture from '#booster/components/BoosterPicture';

defineProps({
  picture: {
    type: Object,
    required: false,
    default() {
      return {
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
      };
    }
  }
});
</script>

<style lang="postcss" scoped>
.organism-picture {
  position: relative;
  width: 100%;
}
</style>
