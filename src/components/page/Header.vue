<template>
  <header>
    <nav>
      <link-list :list="navigation"/>
    </nav>
  </header>
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
