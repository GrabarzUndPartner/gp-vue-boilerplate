<template>
  <footer>
    <nav>
      <link-list v-bind:list="navigation"></link-list>
    </nav>
  </footer>
</template>

<script>
import LinkList from '~/components/molecules/LinkList';

export default {
  components: {
    'link-list': LinkList
  },
  props: {
    navigation: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    }
  }
};
</script>
