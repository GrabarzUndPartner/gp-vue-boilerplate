<template>
  <layout-lost-container
    class="organism-picture"
  >
    <template #container>
      <speedkit-picture v-bind="picture" />
    </template>
  </layout-lost-container>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import LayoutLostContainer from '@/components/layouts/LostContainer';

export default {
  components: {
    LayoutLostContainer,
    SpeedkitPicture
  },

  props: {

    picture: {
      type: Object,
      required: false,
      default () {
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

  }

};
</script>

<style lang="postcss" scoped>
.organism-picture {
  position: relative;
  width: 100%;
}
</style>
