<template>
  <gp-layout-default-container
    class="gp-organism-article-headline-text"
    v-bind="options"
  >
    <gp-molecule-article :headline="headline">
      <gp-atom-rich-text :content="text" />
    </gp-molecule-article>
  </gp-layout-default-container>
</template>

<script>

import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import gpMoleculeArticle from '@/components/molecules/Article';
import gpAtomRichText from '@/components/atoms/RichText';

export default {
  components: {
    gpLayoutDefaultContainer,
    gpMoleculeArticle,
    gpAtomRichText
  },

  props: {

    options: {
      type: Object,
      default () {
        return null;
      }
    },

    headline: {
      type: Object,
      default () {
        return {
          overline: 'Overline HeadlineText',
          headline: 'Headline',
          subline: 'Subline',
        };
      }
    },

    text: {
      type: String,
      default () {
        return '<p>Example Text</p>';
      }
    }
  }
};
</script>

<style lang="postcss">
.gp-organism-article-headline-text {
  /* empty */
}
</style>

