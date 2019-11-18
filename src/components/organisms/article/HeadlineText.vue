<template>
  <gp-layout-default-container class="gp-organism-article-headline-text">
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
        return '<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>';
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

