<template>
  <div class="content">
    <component
      :is="item.component"
      v-for="(item, index) in components?.slice(0, 1)"
      :key="index"
      v-bind="item.data"
      critical
    />
    <component
      :is="item.component"
      v-for="(item, index) in components?.slice(1)"
      :key="index"
      :critical="index < 1"
      v-bind="item.data"
    />
  </div>
</template>

<script setup>
import { usePageContent, useHead } from '#imports';

const { fetch } = usePageContent();
const { components, pageMeta } = await fetch();

useHead({
  title: () => pageMeta.title
});
</script>
