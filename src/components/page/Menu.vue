<template>
  <base-layout-modal class="organism-menu" name="menu" :options="options">
    <nav>
      <molecule-link-list class="links" type="page-menu-links">
        <li v-for="item in navigation" :key="item.title">
          <site-link :to="item.to">
            {{ item.title }}
          </site-link>
          <molecule-link-list
            v-if="item.childrens && item.childrens.length"
            :list="item.childrens"
            class="childs"
            type="page-menu-links"
          />
        </li>
      </molecule-link-list>
    </nav>
  </base-layout-modal>
</template>

<script setup>
const modalStore = useModalStore();

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
