<template>
  <header>
    <nav>
      <link-list :list="navigation" />
    </nav>
    <nuxt-link
      v-for="locale in languages"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.code }}
    </nuxt-link>
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

  computed: {
    languages: function () {
      return this.$i18n.locales.filter((locale) => {
        console.log(locale);
        return locale.code !== this.$i18n.locale;
      });
    }
  },

  mounted () {
    // console.log(this.navigation);
  }
};
</script>
