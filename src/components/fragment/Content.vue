<template>
  <content-container class="fragment-article">
    <element-headline v-if="headline" v-bind="headline" />
    <slot>
      <element-rich-text :content="content" />
    </slot>
  </content-container>
</template>

<script setup>
import { ContentContainer } from 'vue-semantic-structure';

import ElementHeadline from '@/components/element/Headline.vue';
import ElementRichText from '@/components/element/RichText.vue';

defineProps({
  headline: {
    type: Object,
    default() {
      return {
        overline: 'Article Overline',
        headline: 'Article Headline',
        subline: 'Article Subline'
      };
    }
  },
  content: {
    type: String,
    default() {
      return '<p>Example Text</p>';
    }
  }
});
</script>

<style lang="postcss">
.fragment-article {
  /* empty */
}
</style>
