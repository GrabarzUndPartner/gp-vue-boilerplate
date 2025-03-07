<template>
  <div>
    <page-header v-bind="layoutData?.components.pageHeader" sticky />
    <page-menu
      class="page-menu"
      v-bind="layoutData?.components.pageMenu"
      :opened="!preventMenuOpened"
    />
    <page-menu-button
      v-bind="layoutData?.components.pageMenuButton"
      @click="onClickMenuButton"
    />
    <content-container>
      <slot />
    </content-container>
    <page-footer v-bind="layoutData?.components.pageFooter" />
  </div>
</template>

<script setup>
import {
  queryCollection,
  useI18n,
  useAsyncData,
  useBoosterHydrate
} from '#imports';
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import { ContentContainer } from 'vue-semantic-structure';

import PageHeader from '@/components/page/Header';
import PageMenuButton from '@/components/page/MenuButton';
import { useLayoutStore } from '@/stores/layout';

const hydrate = useBoosterHydrate();

const PageFooter = hydrate(() => import('@/components/page/Footer'));
const PageMenu = defineAsyncComponent(() => import('@/components/page/Menu'));

const preventMenuOpened = ref(true);

function onClickMenuButton() {
  preventMenuOpened.value = false;
  document
    .querySelector('.page-menu')
    .dispatchEvent(new CustomEvent('hydrate'));
}

const { locale } = useI18n();

const { data: layoutData } = await useAsyncData(
  `layout-data-${locale.value}`,
  () =>
    queryCollection('layout')
      .path(`/layout/${locale.value}`)
      .first()
      .then(({ body }) => body),
  { watch: [locale] }
);

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
