<template>
  <article class="gp-molecule-article">
    <header v-if="headline">
      <gp-atom-headline
        v-bind="headline"
        tag="h2"
      />
    </header>
    <slot>
      <gp-atom-rich-text :content="content" />
    </slot>
  </article>
</template>

<script>
import gpAtomHeadline from '@/components/atoms/Headline';
import gpAtomRichText from '@/components/atoms/RichText';

export default {
  components: {
    gpAtomHeadline, gpAtomRichText
  },

  props: {
    headline: {
      type: Object,
      default () {
        return {
          overline: 'Article Overline',
          headline: 'Article Headline',
          subline: 'Article Subline',
        };
      }
    },
    content: {
      type: String,
      default () {
        return '<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>';
      }
    }
  }
};
</script>

<style lang="postcss">
.gp-molecule-article {
  /* empty */
}
</style>
