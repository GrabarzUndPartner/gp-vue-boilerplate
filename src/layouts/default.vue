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
  </div>
</template>

<script>

import {
  hydrateWhenVisible,
  hydrateOnInteraction,
  hydrateWhenIdle
} from 'vue-lazy-hydration';
import { directionDetectionObserver } from '@/service/viewport';

const DATA_ATTR_PREVENT_SCROLLING = 'data-prevent-scrolling';

export default {

  components: {
    PageHeader: hydrateWhenIdle(() => import(/* webpackMode: "eager" */'@/components/page/Header')),
    PageMenuButton: hydrateWhenIdle(() => import(/* webpackMode: "eager" */'@/components/page/MenuButton')),
    PageMenu: hydrateOnInteraction(() => import(/* webpackMode: "lazy" */'@/components/page/Menu'), {
      event: 'hydrate'
    }),
    PageFooter: hydrateWhenVisible(
      () => import(/* webpackMode: "lazy" */'@/components/page/Footer'),
      { observerOptions: { rootMargin: '100px' } }
    )
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

  computed: {

    layoutData () {
      return this.$store.getters['layout/data'][this.$i18n.locale];
    },
    layoutComponents () {
      return this.layoutData.components;
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
  },

  head () {
    const seo = this.$nuxtI18nSeo();
    seo.htmlAttrs[String(DATA_ATTR_PREVENT_SCROLLING)] = this.preventScrolling;
    return seo;
  }
};

</script>

<style lang="postcss">
body {
  margin: 0;
}

html[data-prevent-scrolling="true"] {
  & body {
    overflow: hidden;
  }
}

</style>

