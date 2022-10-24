<template>
  <base-content-container class="molecule-article">
    <template #header>
      <atom-headline
        v-if="headline"
        v-bind="headline"
      />
    </template>
    <template #default>
      <slot>
        <atom-rich-text :content="content" />
      </slot>
    </template>
  </base-content-container>
</template>

<script>
import BaseContentContainer from '../base/ContentContainer';
import AtomHeadline from '@/components/atoms/Headline';
import AtomRichText from '@/components/atoms/RichText';

export default {
  components: {
    AtomHeadline,
    AtomRichText,
    BaseContentContainer
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
