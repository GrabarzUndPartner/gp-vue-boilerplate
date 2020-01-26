<template>
  <gp-layout-modal
    class="gp-organism-menu"
    name="menu"
    :options="options"
  >
    <nav>
      <gp-molecule-link-list
        class="links"
        type="page-menu-links"
      >
        <li
          v-for="(item) in navigation"
          :key="item.title"
        >
          <gp-atom-link-to :url="localePath(item.url)">
            {{ item.title }}
          </gp-atom-link-to>
          <gp-molecule-link-list
            v-if="item.childrens && item.childrens.length"
            :list="item.childrens"
            class="childs"
            type="page-menu-links"
          />
        </li>
      </gp-molecule-link-list>
    </nav>
    <gp-language-switch class="language-switch" />
  </gp-layout-modal>
</template>

<script>
import gpLayoutModal from '@/components/layouts/Modal';
import gpMoleculeLinkList from '@/components/molecules/LinkList';
import gpAtomLinkTo from '@/components/atoms/LinkTo';
import gpLanguageSwitch from '@/components/molecules/LanguageSwitch';

export default {
  components: { gpLayoutModal, gpAtomLinkTo, gpMoleculeLinkList, gpLanguageSwitch },
  props: {
    opened: {
      type: Boolean,
      default () {
        return false;
      }
    },
    navigation: {
      type: Array,
      default () {
        return [
          { title: 'Link 1.', url: '#link-1', target: '_self' },
          { title: 'Link 2.', url: '#link-2', target: '_self' },
          { title: 'Link 3.', url: '#link-3', target: '_self' }
        ];
      }
    }
  },
  computed: {
    options () {
      return {
        opened: this.opened
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.gp-organism-menu {
  margin: 0;

  & .language-switch {
    display: inline-block;
    width: 100%;
    margin-top: calc(20 / 375 * 100vw);

    @media (--xs) {
      margin-top: 20px;
    }
  }

  & .links {
    width: 100%;
    text-align: center;
  }
}
</style>
