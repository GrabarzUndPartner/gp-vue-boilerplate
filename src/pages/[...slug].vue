<template>
  <div :class="page?.class">
    <component
      :is="item.component"
      v-for="(item, index) in components"
      :key="index"
      :critical="index < 1"
      v-bind="item.data"
    />
  </div>
</template>

<script setup>
import { joinURL } from 'ufo';
import {
  useRuntimeConfig,
  usePageContent,
  useSeoMeta,
  // eslint-disable-next-line no-unused-vars
  useHead
} from '#imports';

const { fetch } = usePageContent();
const { components, title, description, image, ...page } = await fetch();

const {
  app: { baseURL },
  public: {
    general: { url }
  }
} = await useRuntimeConfig();

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description,
  ogDescription: () => description,
  ogImage: () => joinURL(url, baseURL, image?.src),
  ogImageWidth: () => image?.width,
  ogImageHeight: () => image?.height,
  ogImageType: () => image?.type
});
</script>
