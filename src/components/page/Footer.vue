<template>
  <footer>
    <nav>
      <link-list :list="navigation" />
    </nav>
  </footer>
</template>

<script>
import LinkList from '~/components/molecules/LinkList';

export default {
  components: {
    LinkList
  },
  props: {
    navigation: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
};
</script>
