<template>
  <header>
    <nav>
      <link-list :list="navigation" />
    </nav>
    <nuxt-link
      v-for="language in languages"
      :key="language.code"
      :to="switchLocalePath(language.code)"
      class="language-switch"
    >
      {{ language.code }}
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
        return locale.code !== this.$i18n.locale;
      });
    }
  },

  mounted () {
    // console.log(this.navigation);
  }
};
</script>
