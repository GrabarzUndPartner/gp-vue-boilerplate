<template>
  <gp-layout-stage-container class="gp-organism-stage-video">
    <template slot="background">
      <gp-atom-video v-bind="video" />
    </template>
  </gp-layout-stage-container>
</template>

<script>
import gpLayoutStageContainer from '@/components/layouts/StageContainer';
import gpAtomVideo from '@/components/atoms/Video';

export default {
  components: { gpLayoutStageContainer, gpAtomVideo },
  props: {
    video: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            { 'media': 'default', 'srcset': 'video/9_16/poster/576.jpg' },
            { 'media': 'xs', 'srcset': 'video/16_9/poster/576.jpg' },
            { 'media': 'sm', 'srcset': 'video/16_9/poster/768.jpg' },
            { 'media': 'md', 'srcset': 'video/16_9/poster/992.jpg' },
            { 'media': 'lg', 'srcset': 'video/16_9/poster/1200.jpg' },
            { 'media': 'xl', 'srcset': 'video/16_9/poster/1600.jpg' }
          ]
        };
      }
    }
  }
};
</script>

<style lang="postcss">
.gp-organism-stage-video {
  /* empty */
}
</style>
