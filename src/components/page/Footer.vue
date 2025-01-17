<template>
  <base-layout-lost-container class="page-footer" tag="footer">
    <nav>
      <fragment-link-list :list="navigation" type="page-footer" />
    </nav>
  </base-layout-lost-container>
</template>

<script setup>
import BaseLayoutLostContainer from '@/components/base/layout/LostContainer.vue';
import FragmentLinkList from '@/components/fragment/LinkList.vue';

defineProps({
  options: {
    type: Object,
    default() {
      return {};
    }
  },
  navigation: {
    type: Array,
    default() {
      return [];
    }
  }
});
</script>

<style lang="postcss">
.page-footer {
  padding: calc(20 / 375 * 100%) 0;
  margin: 0;

  @media (--xs) {
    padding: 20px 0;
  }

  background: var(--color-light-grey);
}
</style>
