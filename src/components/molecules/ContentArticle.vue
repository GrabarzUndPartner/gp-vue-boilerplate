<template>
  <article class="molecule-article">
    <header v-if="headline">
      <atom-headline
        v-bind="headline"
        tag="h2"
      />
    </header>
    <slot>
      <atom-rich-text :content="content" />
    </slot>
  </article>
</template>

<script>
import AtomHeadline from '@/components/atoms/Headline';
import AtomRichText from '@/components/atoms/RichText';

export default {
  components: {
    AtomHeadline, AtomRichText
  },

  props: {
    headline: {
      type: Object,
      default () {
        return {
          overline: 'Article Overline',
          headline: 'Article Headline',
          subline: 'Article Subline'
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
.molecule-article {
  /* empty */
}
</style>
