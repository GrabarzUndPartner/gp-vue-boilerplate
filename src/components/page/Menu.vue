<template>
  <layout-modal
    class="organism-menu"
    name="menu"
    :options="options"
  >
    <nav>
      <molecule-link-list
        class="links"
        type="page-menu-links"
      >
        <li
          v-for="(item) in navigation"
          :key="item.title"
        >
          <atom-link-to :url="localePath(item.url)">
            {{ item.title }}
          </atom-link-to>
          <molecule-link-list
            v-if="item.childrens && item.childrens.length"
            :list="item.childrens"
            class="childs"
            type="page-menu-links"
          />
        </li>
      </molecule-link-list>
    </nav>
    <language-switch class="language-switch" />
  </layout-modal>
</template>

<script>
import LayoutModal from '@/components/layouts/Modal';
import MoleculeLinkList from '@/components/molecules/LinkList';
import AtomLinkTo from '@/components/atoms/LinkTo';
import LanguageSwitch from '@/components/molecules/LanguageSwitch';

export default {
  components: { LayoutModal, AtomLinkTo, MoleculeLinkList, LanguageSwitch },
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
.organism-menu {
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
