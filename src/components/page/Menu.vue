<template>
  <gp-layout-modal
    class="gp-organism-menu"
    name="menu"
  >
    <gp-molecule-link-list
      :list="navigation"
      class="links"
    />
    <gp-language-switch class="language-switch" />
  </gp-layout-modal>
</template>

<script>
import gpLayoutModal from '@/components/layouts/Modal';
import gpMoleculeLinkList from '@/components/molecules/LinkList';
import gpLanguageSwitch from '@/components/molecules/LanguageSwitch';

export default {
  components: { gpLayoutModal, gpMoleculeLinkList, gpLanguageSwitch },
  props: {
    navigation: {
      type: Array,
      required: false,
      default () {
        return [
          { title: 'Link 1.', url: '#link-1', target: '_self' },
          { title: 'Link 2.', url: '#link-2', target: '_self' },
          { title: 'Link 3.', url: '#link-3', target: '_self' }
        ];
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.gp-organism-menu {
  & .language-switch {
    display: inline-block;
    width: 100%;
    margin-top: calc(20 / 375 * 100vw);

    @media (--xs) {
      margin-top: 20px;
    }

    font-family: Verdana, Geneva, sans-serif;
    text-align: center;

    & >>> a {
      color: var(--color-black);
      text-decoration: none;
      text-transform: uppercase;
      opacity: 0.6;

      &.nuxt-link-exact-active {
        opacity: 1;
      }
    }
  }

  & .links {
    width: 100%;
    text-align: center;
  }

  & >>> .links,
  & >>> .links ul {
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
      display: block;
      font-family: Georgia, serif;
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

        &.nuxt-link-exact-active {
          opacity: 1;
        }
      }
    }

    & .childrens {
      & li {
        display: block;
        font-family: Verdana, Geneva, sans-serif;
        font-size: calc(18 / 375 * 100vw);

        @media (--xs) {
          font-size: 18px;
        }

        @media (--md) {
          font-size: 20px;
        }

        & a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
