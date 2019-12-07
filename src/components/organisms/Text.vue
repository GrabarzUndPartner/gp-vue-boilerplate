<template>
  <gp-layout-default-container
    class="gp-organism-text"
    v-bind="options"
  >
    <gp-molecule-article v-bind="article" />
  </gp-layout-default-container>
</template>

<script>

import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import gpMoleculeArticle from '@/components/molecules/Article';

export default {
  components: {
    gpLayoutDefaultContainer,
    gpMoleculeArticle
  },

  props: {

    options: {
      type: Object,
      default () {
        return null;
      }
    },

    article: {
      type: Object,
      default () {
        return {
          headline: {
            overline: 'Text Overline',
            headline: 'Text Headline',
            subline: 'Text Subline',
          },
          content: '<p>Example Text</p>'
        };
      }
    }
  }
};
</script>

<style lang="postcss">
.gp-organism-text {
  /* empty */
}
</style>

