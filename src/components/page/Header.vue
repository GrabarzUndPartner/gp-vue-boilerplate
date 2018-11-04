<template>
  <header>
    <nav>
      <link-list :list="navigation"/>
    </nav>
    <nuxt-link
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.code }}</nuxt-link>

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
  },

  mounted() {
    // console.log(this.navigation);
  }
};
</script>
