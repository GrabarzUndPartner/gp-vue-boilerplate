<template>
  <base-content-container class="content">
    <div>{{ $route.path }}</div>
    <component
      :is="item.component"
      v-for="(item, index) in components.slice(0, 1)"
      :key="index"
      v-bind="item.data"
      critical
    />
    <base-content-container>
      <component
        :is="item.component"
        v-for="(item, index) in components.slice(1)"
        :key="index"
        v-bind="item.data"
      />
    </base-content-container>
  </base-content-container>
</template>

<script setup>
import { useRoute, useHead, usePageContent } from '#imports';
const $route = useRoute();
const { fetch } = usePageContent();
const { components, pageMeta } = await fetch();

useHead({
  test: $route.path,
  title: () => pageMeta.title
});
</script>
