<template>
  <fragment-link-list class="fragment-language-switch">
    <li v-for="language in languages" :key="language.code">
      <site-link
        :to="switchLocalePath(language.code)"
        class="language-switch"
        :title="language.code"
        >{{ language.code }}
      </site-link>
    </li>
  </fragment-link-list>
</template>

<script>
import FragmentLinkList from '@/components/fragment/LinkList';

export default {
  components: {
    FragmentLinkList
  },
  props: {
    filterCurrentLang: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    }
  },

  computed: {
    languages() {
      return this.$i18n.locales.filter(locale => {
        return (
          !this.filterCurrentLang ||
          (this.filterCurrentLang && locale.code !== this.$i18n.locale)
        );
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.fragment-language-switch {
  padding: 0;
  margin: 0;
  text-align: center;
  list-style: none;

  & li {
    display: inline-block;
    margin: 0 5px;
    font-size: calc(16 / 375 * 100vw);

    @media (--xs) {
      font-size: 16px;
    }
  }

  & a {
    color: var(--color-black);
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0.6;

    &.router-link-exact-active {
      text-decoration: underline;
      opacity: 1;
    }
  }
}
</style>
