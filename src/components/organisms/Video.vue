<template>
  <gp-layout-default-container
    class="gp-organism-video"
    v-bind="options"
  >
    <template slot="container">
      <gp-atom-video v-bind="video" />
    </template>
  </gp-layout-default-container>
</template>

<script>
import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import gpAtomVideo from '@/components/atoms/Video';

export default {
  components: { gpLayoutDefaultContainer, gpAtomVideo },
  props: {

    options: {
      type: Object,
      default () {
        return null;
      }
    },

    video: {
      type: Object,
      default () {
        return {
          poster: {
            sources: [
              { 'media': 'default', 'srcset': 'video/9_16/poster/412.jpg' },
              { 'media': 'default', 'srcset': 'video/9_16/poster/412.webp' },
              { 'media': 'sm', 'srcset': 'video/16_9/poster/768.jpg' },
              { 'media': 'sm', 'srcset': 'video/16_9/poster/768.webp' },
              { 'media': 'md', 'srcset': 'video/16_9/poster/992.jpg' },
              { 'media': 'md', 'srcset': 'video/16_9/poster/992.webp' },
              { 'media': 'lg', 'srcset': 'video/16_9/poster/1200.jpg' },
              { 'media': 'lg', 'srcset': 'video/16_9/poster/1200.webp' },
              { 'media': 'xl', 'srcset': 'video/16_9/poster/1600.jpg' },
              { 'media': 'xl', 'srcset': 'video/16_9/poster/1600.webp' }
            ]
          }
        };
      }
    }

  }
};
</script>

<style lang="postcss">
.gp-organism-video {
  /* empty */
}
</style>
