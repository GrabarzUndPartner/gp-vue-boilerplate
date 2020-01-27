<template>
  <layout-default-container
    class="organism-text"
    v-bind="options"
  >
    <molecule-content-article v-bind="article" />
  </layout-default-container>
</template>

<script>

import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import MoleculeContentArticle from '@/components/molecules/ContentArticle';

export default {
  components: {
    LayoutDefaultContainer,
    MoleculeContentArticle
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
            subline: 'Text Subline'
          },
          content: '<p>Example Text</p>'
        };
      }
    }
  }
};
</script>

<style lang="postcss">
.organism-text {
  /* empty */
}
</style>

