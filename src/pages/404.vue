<template>
  <div class="error">
    <organism-stage-picture v-bind="stagePicture" />
    <organism-text v-bind="text" />
  </div>
</template>

<script>

import OrganismStagePicture from '@/components/organisms/StagePicture';
import OrganismText from '@/components/organisms/Text';
export default {
  components: { OrganismStagePicture, OrganismText },

  props: {
    error: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  data () {
    return {

      stagePicture: {
        picture: {
          sourceClientOnly: false,
          sources: [
            {
              media: 'default',
              srcset: 'img/error.jpg'
            }
          ]
        }
      },
      text: {
        article: {
          headline: {
            overline: null,
            headline: '404 - Page not found',
            subline: null
          },
          content: '<p>Unfortunately the page was not found.</p>'
        }
      }
    };
  }

};
</script>

<style lang="postcss">
.error {
  & > * {
    visibility: visible !important;
  }
}
</style>
