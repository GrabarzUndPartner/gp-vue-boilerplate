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
        return '<p>Example Text</p>';
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
