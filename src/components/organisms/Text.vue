<template>
  <gp-layout-default-container
    class="gp-organism-text"
    :options="options"
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
          content: '<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>'
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

