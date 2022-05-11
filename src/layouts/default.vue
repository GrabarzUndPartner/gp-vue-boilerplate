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
import {
  hydrateOnInteraction
} from 'vue-lazy-hydration';
import speedkitHydrate from 'nuxt-speedkit/hydrate';
import PageInfoLayer from '@/components/page/InfoLayer';

import PageMenuButton from '@/components/page/MenuButton';

import layoutData from '@/content/layout.json';

const DATA_ATTR_PREVENT_SCROLLING = 'data-prevent-scrolling'; ;

export default {

  components: {
    PageMenuButton,
    PageMenu: hydrateOnInteraction(() => import('@/components/page/Menu'), {
      event: 'hydrate'
    }),
    PageInfoLayer,
    PageHeader: speedkitHydrate(() => import(/* webpackMode: "eager" */'@/components/page/Header')),
    PageFooter: speedkitHydrate(() => import('@/components/page/Footer'))
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
    const seo = this.$nuxtI18nHead();
    seo.htmlAttrs[String(DATA_ATTR_PREVENT_SCROLLING)] = this.preventScrolling;
    return seo;
  },

  computed: {
    layoutData () {
      return layoutData[this.$i18n.locale];
    },
    layoutComponents () {
      return (this.layoutData || { components: [] }).components;
    },
    preventScrolling () {
      return this.$store.getters['layout/preventScrolling'];
    }
  },

  async mounted () {
    const { directionDetectionObserver } = await import('@/service/viewport');

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

  @media (min-width: 375px) {
    font-size: vw(16, 375);
  }

  @media (min-width: 576px) {
    font-size: vw(16, 576);
  }

  @media (min-width: 768px) {
    font-size: vw(16, 768);
  }

  @media (min-width: 992px) {
    font-size: vw(16, 992);
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
}

html[data-prevent-scrolling="true"] {
  & body {
    overflow: hidden;
  }
}

</style>

