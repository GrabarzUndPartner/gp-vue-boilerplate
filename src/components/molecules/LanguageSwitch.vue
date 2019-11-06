<template>
  <gp-molecule-link-list class="gp-molecule-language-switch">
    <li
      v-for="language in languages"
      :key="language.code"
    >
      <gp-atom-link
        :url="switchLocalePath(language.code)"
        class="language-switch"
        :title="language.code"
      />
    </li>
  </gp-molecule-link-list>
</template>

<script>

import gpMoleculeLinkList from '@/components/molecules/LinkList';
import gpAtomLink from '@/components/atoms/Link';

export default {
  components: {
    gpMoleculeLinkList,
    gpAtomLink
  },
  props: {
    filterCurrentLang: {
      type: Boolean,
      required: false,
      default () { return false; }
    }
  },

  computed: {
    languages: function () {
      return this.$i18n.locales.filter((locale) => {
        return !this.filterCurrentLang || this.filterCurrentLang && locale.code !== this.$i18n.locale;
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.gp-molecule-language-switch {
  padding: 0;
  margin: 0;
  list-style: none;

  & li {
    display: inline-block;
    margin: 0 5px;
  }
}
</style>
