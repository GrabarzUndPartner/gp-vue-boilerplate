<template>
  <base-content-container
    class="organism-stage-picture"
  >
    <speedkit-picture
      v-bind="picture"
    />
    <layout-lost-container>
      <base-content-headline class="headline">
        {{ headline }}
      </base-content-headline>
    </layout-lost-container>
  </base-content-container>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import BaseContentHeadline from '@/components/base/ContentHeadline';
import BaseContentContainer from '@/components/base/ContentContainer';

export default {
  components: {
    LayoutLostContainer,
    SpeedkitPicture,
    BaseContentHeadline,
    BaseContentContainer
  },

  props: {
    picture: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            { src: '/img/sample-a-16-9.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
          ]
        };
      }
    },
    headline: {
      type: String,
      default: 'Stage Picture'
    }
  }
};
</script>

<style lang="postcss" scoped>
.organism-stage-picture {
  position: relative;

  &:first-child {
    margin-top: 0;
  }
}

.layouts-lost-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: em(20) 0;
  padding-top: em(60);
  margin: 0;
  color: white;
  text-align: center;
  background: rgb(0 0 0);
  background: linear-gradient(0deg, rgb(0 0 0 / 60%) 0%, rgb(0 0 0 / 0%) 50%);
}

.headline {
  lost-column: 12/12;
  margin: 0;
}
</style>
