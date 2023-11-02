<template>
  <base-content-container class="content">
    <component
      :is="item.component"
      v-for="(item, index) in components.slice(0, 1)"
      :key="index"
      v-bind="item.data"
      critical />
    <base-content-container>
      <component
        :is="item.component"
        v-for="(item, index) in components.slice(1)"
        :key="index"
        v-bind="item.data" />
    </base-content-container>
  </base-content-container>
</template>

<script setup>
import { useRoute, queryContent, useHead, useNuxtApp } from '#imports';
import BaseContentContainer from '@/components/base/ContentContainer';

import speedkitHydrate from '#speedkit/hydrate';

registerGlobalComponents();

const route = useRoute();
const path = normalizePath(route.path).replace('/index', '');
const { title, components } = await queryContent(path).findOne();

useHead({
  title
});

function registerGlobalComponents() {
  const { vueApp } = useNuxtApp();

  const globalComponents = {
    StagePicture: speedkitHydrate(() =>
      import('@/components/modules/StagePicture')
    ),
    StageVideo: speedkitHydrate(() =>
      import('@/components/modules/StageVideo')
    ),
    FullText: speedkitHydrate(() => import('@/components/modules/FullText')),
    TextImage: speedkitHydrate(() => import('@/components/modules/TextImage')),
    SinglePicture: speedkitHydrate(() =>
      import('@/components/modules/SinglePicture')
    ),
    SingleVideo: speedkitHydrate(() =>
      import('@/components/modules/SingleVideo')
    )
  };

  Object.entries(globalComponents).forEach(([name, component]) => {
    vueApp.component(name, component);
  });
}

function normalizePath(path, locale) {
  path = path
    .replace(/^\//, '')
    .replace(locale, '')
    .replace(/^[\\/]?/, '')
    .replace(/^\//, '');
  return `${locale}/${path || 'index'}`;
}
</script>
