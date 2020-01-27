<template>
  <layout-default-container
    class="page-footer"
    tag="footer"
  >
    <nav>
      <link-list
        :list="navigation"
        type="page-footer"
      />
    </nav>
  </layout-default-container>
</template>

<script>
import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import LinkList from '~/components/molecules/LinkList';

export default {
  components: {
    LayoutDefaultContainer,
    LinkList
  },
  props: {
    options: {
      type: Object,
      default () {
        return {};
      }
    },
    navigation: {
      type: Array,
      default () {
        return [];
      }
    }
  }
};
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
