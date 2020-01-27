<template>
  <layout-default-container
    class="organism-single-video"
    v-bind="options"
  >
    <template slot="container">
      <atom-responsive-video v-bind="video" />
    </template>
  </layout-default-container>
</template>

<script>
import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import AtomResponsiveVideo from '@/components/atoms/ResponsiveVideo';

export default {
  components: { LayoutDefaultContainer, AtomResponsiveVideo },
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
              { media: 'default', srcset: 'video/9_16/poster/412.jpg' },
              { media: 'default', srcset: 'video/9_16/poster/412.webp' },
              { media: 'sm', srcset: 'video/16_9/poster/768.jpg' },
              { media: 'sm', srcset: 'video/16_9/poster/768.webp' },
              { media: 'md', srcset: 'video/16_9/poster/992.jpg' },
              { media: 'md', srcset: 'video/16_9/poster/992.webp' },
              { media: 'lg', srcset: 'video/16_9/poster/1200.jpg' },
              { media: 'lg', srcset: 'video/16_9/poster/1200.webp' },
              { media: 'xl', srcset: 'video/16_9/poster/1600.jpg' },
              { media: 'xl', srcset: 'video/16_9/poster/1600.webp' }
            ]
          }
        };
      }
    }

  }
};
</script>

<style lang="postcss">
.organism-single-video {
  /* empty */
}
</style>
