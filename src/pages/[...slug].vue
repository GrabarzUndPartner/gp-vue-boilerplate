<template>
  <base-content-container class="content">
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
        :critical="index < 1"
        v-bind="item.data"
      />
    </base-content-container>
  </base-content-container>
</template>

<script setup>
const { fetch } = usePageContent();
const { components, pageMeta } = await fetch();

useHead({
  title: () => pageMeta.title
});
</script>
