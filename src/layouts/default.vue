<template>
  <base-content-container>
    <template #before>
      <page-header
        v-bind="layoutData[$i18n.locale].components.pageHeader"
        sticky />
    </template>
    <template #default>
      <page-menu
        class="page-menu"
        v-bind="layoutData[$i18n.locale].components.pageMenu"
        :opened="!preventMenuOpened" />
      <page-menu-button
        v-bind="layoutData[$i18n.locale].components.pageMenuButton"
        @click="onClickMenuButton" />
      <slot />
    </template>
    <template #after>
      <page-footer v-bind="layoutData[$i18n.locale].components.pageFooter" />
    </template>
  </base-content-container>
</template>

<script setup>
import { hydrateOnInteraction } from 'vue3-lazy-hydration';
import { ref, defineAsyncComponent } from 'vue';
import { useHead, useLocaleHead, onMounted, onUnmounted } from '#imports';
import layoutData from '@/content/layout.json';

import speedkitHydrate from '#speedkit/hydrate';
import BaseContentContainer from '@/components/base/ContentContainer';
import PageMenuButton from '@/components/page/MenuButton';
import PageHeader from '@/components/page/Header';
import { useLayoutStore } from '@/stores/layout.mjs';

const PageFooter = speedkitHydrate(() => import('@/components/page/Footer'));
const PageMenu = hydrateOnInteraction(
  defineAsyncComponent(() => import('@/components/page/Menu')),
  ['hydrate']
);
const preventMenuOpened = ref(false);
function onClickMenuButton() {
  preventMenuOpened.value = false;
  document
    .querySelector('.page-menu')
    .dispatchEvent(new CustomEvent('hydrate'));
}

const subscription = ref(null);

onMounted(async () => {
  const { directionDetectionObserver } = await import('@/service/viewport');

  const { Subscription } = await import('rxjs');
  subscription.value = new Subscription();
  subscription.value.add(
    directionDetectionObserver.subscribe(onDirectionChange)
  );
});

onUnmounted(() => {
  subscription.value.unsubscribe();
});

const layoutStore = useLayoutStore();
function onDirectionChange(value, reset = false) {
  if (reset) {
    layoutStore.toggleScrollDirection(false);
  } else {
    layoutStore.toggleScrollDirection(value > 0);
  }
}

const i18nHead = useLocaleHead();
useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
});
</script>

<style lang="postcss">
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (width >= 375px) {
    font-size: vw(16, 375);
  }

  @media (width >= 576px) {
    font-size: vw(16, 576);
  }

  @media (width >=768px) {
    font-size: vw(16, 768);
  }

  @media (width >=992px) {
    font-size: vw(16, 992);
  }

  @media (width >=1200px) {
    font-size: 16px;
  }
}

html[data-prevent-scrolling='true'] {
  & body {
    overflow: hidden;
  }
}
</style>
