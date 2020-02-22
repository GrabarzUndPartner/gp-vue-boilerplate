<template>
  <ul
    class="molecule-link-list"
    :class="styleClasses"
  >
    <slot>
      <li
        v-for="(item) in list"
        :key="item.title"
      >
        <atom-link-to :url="getUrl(item)">
          {{ item.title }}
        </atom-link-to>
      </li>
    </slot>
  </ul>
</template>

<script>
import AtomLinkTo from '@/components/atoms/LinkTo';

export default {
  components: {
    AtomLinkTo
  },
  props: {
    type: {
      type: String,
      default () {
        return null;
      }
    },
    list: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  computed: {
    styleClasses () {
      const classes = {};
      classes[`type--${this.type}`] = this.type;
      return classes;
    }
  },
  methods: {
    getUrl (item) {
      if ('$i18n' in this) {
        // use when nuxtI18n exists
        this.localePath(item.url);
      } else {
        return item.url;
      }
    }
  }
};
</script>

<style lang="postcss">
.molecule-link-list {
  &.type--page-menu-links {
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
      display: block;
      font-family: sans-serif;
      font-size: calc(32 / 375 * 100vw);
      font-weight: 400;

      @nest .font_raleway .js--visible & {
        font-family: "Raleway", sans-serif;
      }

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

        &.nuxt-link-exact-active {
          opacity: 1;
        }
      }
    }

    @nest .type--page-menu-links & {
      line-height: 1;
      text-align: center;

      & li {
        display: inline-block;
        margin: 0 calc(10 / 375 * 100vw);
        font-family: sans-serif;
        font-size: calc(22 / 375 * 100vw);
        font-weight: 400;

        @nest .font_raleway .js--visible & {
          font-family: "Raleway", sans-serif;
        }

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

  &.type--page-footer {
    padding: 0;
    margin: 0;
    list-style: none;

    @media (--sm-max) {
      text-align: center;
    }

    & li {
      display: inline-block;
      margin-right: calc(10 / 375 * 100vw);
      font-family: sans-serif;

      @nest .font_raleway .js--visible & {
        font-family: "Raleway", sans-serif;
      }

      font-size: calc(16 / 375 * 100vw);
      font-weight: 400;
      line-height: 2em;

      @media (--xs) {
        font-size: 16px;
      }

      & a {
        color: var(--color-black);
        text-decoration: none;
        opacity: 0.6;

        &.nuxt-link-exact-active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
