<template>
  <molecule-link-list class="molecule-language-switch">
    <li v-for="{ code } in languages" :key="code">
      <nuxt-link
        :to="switchLocale(code)"
        class="language-switch"
        :title="code"
        >{{ code }}</nuxt-link
      >
    </li>
  </molecule-link-list>
</template>

<script setup>
import { computed } from 'vue';
import MoleculeLinkList from '@/components/molecules/LinkList';

import { useI18n, useSwitchLocalePath } from '#imports';

const { locale, locales } = useI18n();

const props = defineProps({
  filterCurrentLang: {
    type: Boolean,
    required: false,
    default() {
      return false;
    }
  }
});

// Workaround for dynamic routes
const switchLocalePath = useSwitchLocalePath();
const switchLocale = locale => {
  return switchLocalePath(locale);
};

const languages = computed(() =>
  locales.value.filter(({ code }) => {
    return (
      !props.filterCurrentLang ||
      (props.filterCurrentLang && code !== locale.value)
    );
  })
);
</script>

<style lang="postcss" scoped>
.molecule-language-switch {
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

    &.nuxt-link-exact-active {
      opacity: 1;
    }
  }
}
</style>
