<template>
  <div>
    <page-header
      v-bind="layoutComponents.pageHeader"
      sticky
    />
    <page-menu
      ref="pageMenu"
      v-bind="layoutComponents.pageMenu"
      :opened="!preventMenuOpened"
    />
    <page-menu-button
      v-bind="layoutComponents.pageMenuButton"
      @click.native="onClickMenuButton"
    />
    <main>
      <nuxt />
    </main>
    <page-footer v-bind="layoutComponents.pageFooter" />
    <page-info-layer critical />
  </div>
</template>

<script>
import PageInfoLayer from '@/components/page/InfoLayer';

import {
  hydrateOnInteraction
} from 'vue-lazy-hydration';
import { directionDetectionObserver } from '@/service/viewport';

import PageMenuButton from '@/components/page/MenuButton';

const DATA_ATTR_PREVENT_SCROLLING = 'data-prevent-scrolling'; ;

export default {

  components: {
    PageMenuButton,
    PageMenu: hydrateOnInteraction(() => import('@/components/page/Menu'), {
      event: 'hydrate'
    }),
    PageInfoLayer
  },

  speedkitComponents: {
    PageHeader: () => import(/* webpackMode: "eager" */'@/components/page/Header'),
    PageFooter: () => import('@/components/page/Footer')
  },

  data () {
    return {
      /**
       * Is deactivated when the menu is activated.
       * Serves as workaround for ignoring the "hydrateOnInteraction" when changing error.vue (layout) to default.vue (layout).
       */
      preventMenuOpened: true

    };
  },

  head () {
    const seo = this.$nuxtI18nSeo();
    seo.htmlAttrs[String(DATA_ATTR_PREVENT_SCROLLING)] = this.preventScrolling;
    return seo;
  },

  computed: {

    layoutData () {
      return this.$store.getters['layout/data'][this.$i18n.locale];
    },
    layoutComponents () {
      return (this.layoutData || { components: [] }).components;
    },
    preventScrolling () {
      return this.$store.getters['layout/preventScrolling'];
    }
  },

  mounted () {
    this.subscriptions = [
      directionDetectionObserver.subscribe(this.onDirectionChange)
    ];

    /**
     * Occurs when changing pages via nuxt router.scrollBehavior.js (@/app/router.scrollBehavior.js)
     * https://router.vuejs.org/guide/advanced/scroll-behavior.html
     * Sets the direction back to initial.
     */
    this.$nuxt.$on('triggerScroll', () => {
      this.onDirectionChange(null, true);
    });
  },
  destroyed () {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  },

  methods: {
    onDirectionChange (value, reset = false) {
      if (reset) {
        this.$store.dispatch('layout/toggleDirection', false);
      } else {
        this.$store.dispatch('layout/toggleDirection', value > 0);
      }
    },

    onClickMenuButton () {
      this.preventMenuOpened = false;
      this.$refs.pageMenu.$el.dispatchEvent(new CustomEvent('hydrate'));
    }
  }
};

</script>

<style lang="postcss">
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html[data-prevent-scrolling="true"] {
  & body {
    overflow: hidden;
  }
}

</style>

