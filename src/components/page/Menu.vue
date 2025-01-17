<template>
  <base-layout-modal class="organism-menu" name="menu" :options="options">
    <nav>
      <fragment-link-list class="links" type="page-menu-links">
        <li v-for="item in navigation" :key="item.title">
          <nuxt-link :to="localePath(item.to)">
            {{ item.title }}
          </nuxt-link>
          <fragment-link-list
            v-if="item.childs && item.childs.length"
            :list="item.childs"
            class="childs"
            type="page-menu-links"
          />
        </li>
      </fragment-link-list>
      <ClientOnly>
        <FragmentLanguageSwitch />
      </ClientOnly>
    </nav>
  </base-layout-modal>
</template>

<script setup>
import { useModalStore } from '@/stores/layout';
import { useRoute, useLocalePath } from '#imports';
import { computed, watch } from 'vue';

const modalStore = useModalStore();
const localePath = useLocalePath();

const $route = useRoute();

watch(
  () => $route.path,
  () => modalStore.closeModal({ name: 'menu' })
);

const props = defineProps({
  opened: {
    type: Boolean,
    default() {
      return false;
    }
  },
  navigation: {
    type: Array,
    default() {
      return [
        { title: 'Link 1.', to: '#link-1', target: '_self' },
        { title: 'Link 2.', to: '#link-2', target: '_self' },
        { title: 'Link 3.', to: '#link-3', target: '_self' }
      ];
    }
  }
});

const options = computed(() => ({
  opened: props.opened
}));
</script>

<style lang="postcss" scoped>
.organism-menu {
  margin: 0;

  & nav {
    display: flex;
    flex-direction: column;
    gap: em(20);
  }

  & .language-switch {
    display: inline-block;
    width: 100%;
    margin-top: em(20);
  }

  & .links {
    width: 100%;
    text-align: center;
  }
}
</style>
