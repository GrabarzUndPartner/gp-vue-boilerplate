<template>
  <layout-lost-container class="organism-full-text">
    <molecule-content v-bind="article" />
  </layout-lost-container>
</template>

<script>

import LayoutLostContainer from '@/components/layouts/LostContainer';
import MoleculeContent from '@/components/molecules/Content';

export default {
  components: {
    LayoutLostContainer,
    MoleculeContent
  },

  props: {
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

<style lang="postcss" scoped>
.organism-full-text {
  /* empty */
}
</style>

