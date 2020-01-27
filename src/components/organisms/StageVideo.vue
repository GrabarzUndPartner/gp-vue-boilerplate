<template>
  <layout-default-container
    class="organism-stage-video"
    v-bind="options"
  >
    <template slot="background">
      <atom-responsive-video
        v-if="video"
        v-bind="video"
      />
    </template>
  </layout-default-container>
</template>

<script>
import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import AtomResponsiveVideo from '@/components/atoms/ResponsiveVideo';

export default {
  components: {
    LayoutDefaultContainer,
    AtomResponsiveVideo
  },

  props: {

    options: {
      type: Object,
      default () {
        return null;
      }
    },

    video: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            { media: 'default', srcset: 'video/9_16/poster/576.jpg' },
            { media: 'xs', srcset: 'video/16_9/poster/576.jpg' },
            { media: 'sm', srcset: 'video/16_9/poster/768.jpg' },
            { media: 'md', srcset: 'video/16_9/poster/992.jpg' },
            { media: 'lg', srcset: 'video/16_9/poster/1200.jpg' },
            { media: 'xl', srcset: 'video/16_9/poster/1600.jpg' }
          ]
        };
      }
    }
  }
};
</script>

<style lang="postcss">
.organism-stage-video {
  position: relative;
  width: 100%;
}
</style>
