<template>
  <ul
    v-font="$getFont('Raleway')"
    class="fragment-link-list"
    :class="styleClasses"
  >
    <slot>
      <li v-for="item in list" :key="item.title">
        <nuxt-link :to="localePath(item.to)">
          {{ item.title }}
        </nuxt-link>
      </li>
    </slot>
  </ul>
</template>

<script setup>
import { useBoosterFonts, useLocalePath } from '#imports';
import { computed } from 'vue';

const localePath = useLocalePath();
const { $getFont } = useBoosterFonts();

const props = defineProps({
  type: {
    type: String,
    default() {
      return null;
    }
  },
  list: {
    type: Array,
    default() {
      return [];
    }
  }
});

const styleClasses = computed(() => {
  const classes = {};
  classes[`type-${props.type}`] = props.type;
  return classes;
});
</script>

<style lang="postcss">
.fragment-link-list {
  &.type-page-menu-links {
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
      display: block;
      font-size: calc(32 / 375 * 100vw);
      line-height: 2em;

      @media (--xs) {
        font-size: 32px;
      }

      @media (--md) {
        font-size: 36px;
      }

      & a {
        color: var(--color-black);
        text-decoration: none;
        opacity: 0.6;

        &.router-link-exact-active {
          opacity: 1;
        }
      }
    }

    .type-page-menu-links & {
      line-height: 1;
      text-align: center;

      & li {
        display: inline-block;
        margin: 0 calc(10 / 375 * 100vw);
        font-size: calc(22 / 375 * 100vw);
        line-height: 1.5em;

        @media (--xs) {
          margin: 0 10px;
          font-size: 22px;
        }

        @media (--md) {
          font-size: 26px;
        }
      }
    }
  }

  &.type-page-footer {
    padding: 0;
    margin: 0;
    list-style: none;

    @media (--sm-max) {
      text-align: center;
    }

    & li {
      display: inline-block;
      margin-right: calc(10 / 375 * 100vw);
      font-size: calc(16 / 375 * 100vw);
      line-height: 2em;

      @media (--xs) {
        font-size: 16px;
      }

      & a {
        color: var(--color-black);
        text-decoration: none;
        opacity: 0.6;

        &.router-link-exact-active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
