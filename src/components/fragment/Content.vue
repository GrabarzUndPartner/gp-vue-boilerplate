<template>
  <content-container class="fragment-article">
    <template #header>
      <element-headline v-if="headline" v-bind="headline" />
    </template>
    <template #default>
      <slot>
        <element-rich-text :content="content" />
      </slot>
    </template>
  </content-container>
</template>

<script setup>
import { ContentContainer } from 'vue-semantic-structure';
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
