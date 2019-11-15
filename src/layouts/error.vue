<template>
  <div>
    <gp-organism-stage-picture v-bind="stagePicture" />
    <gp-organism-text v-bind="text" />
  </div>
</template>

<script>

import gpOrganismStagePicture from '@/components/organisms/StagePicture';
import gpOrganismText from '@/components/organisms/Text';
export default {
  components: { gpOrganismStagePicture, gpOrganismText },

  props: {
    error: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  computed: {
    stagePicture () {
      return {
        picture: {
          sourceClientOnly: false,
          sources: [
            {
              'media': 'default',
              'srcset': 'img/error.jpg'
            }
          ]
        }
      };
    },
    text () {
      return {
        article: {
          headline: {
            overline: null,
            headline: this.error.statusCode,
            subline: null
          },
          content: `<p>${this.error.message}</p>`
        }
      };
    },
  }
};
</script>

<style>
</style>
