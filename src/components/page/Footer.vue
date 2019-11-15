<template>
  <gp-layout-default-container
    class="gp-page-footer"
    tag="footer"
  >
    <nav>
      <link-list
        :list="navigation"
        type="page-footer"
      />
    </nav>
  </gp-layout-default-container>
</template>

<script>
import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import LinkList from '~/components/molecules/LinkList';

export default {
  components: {
    gpLayoutDefaultContainer,
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
      default: function () {
        return [];
      }
    }
  }
};
</script>

<style lang="postcss">
.gp-page-footer {
  padding: calc(20 / 375 * 100%) 0;
  margin: 0;

  @media (--xs) {
    padding: 20px 0;
  }

  background: var(--color-light-grey);
}
</style>
