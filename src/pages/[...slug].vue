<template>
  <base-content-container class="content">
    <component
      :is="item.component"
      v-for="(item, index) in components?.slice(0, 1)"
      :key="index"
      v-bind="item.data"
      critical
    />
    <base-content-container>
      <component
        :is="item.component"
        v-for="(item, index) in components?.slice(1)"
        :key="index"
        :critical="index < 1"
        v-bind="item.data"
      />
    </base-content-container>
  </base-content-container>
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
const { components, title, description, image } = await fetch();

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
