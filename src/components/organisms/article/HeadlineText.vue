<template>
  <layout-default-container
    class="organism-article-headline-text"
    v-bind="options"
  >
    <molecule-content-article :headline="headline">
      <atom-rich-text :content="text" />
    </molecule-content-article>
  </layout-default-container>
</template>

<script>

import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import MoleculeContentArticle from '@/components/molecules/ContentArticle';
import AtomRichText from '@/components/atoms/RichText';

export default {
  components: {
    LayoutDefaultContainer,
    MoleculeContentArticle,
    AtomRichText
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
          subline: 'Subline'
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
.organism-article-headline-text {
  /* empty */
}
</style>

