<template>
  <div>
    <page-header
      v-bind="pageHeader"
      sticky
    />
    <page-menu
      ref="pageMenu"
      v-bind="pageMenu"
      :opened="!preventMenuOpened"
    />
    <page-menu-button
      v-bind="pageMenuButton"
      @click.native="onClickMenuButton"
    />
    <main>
      <nuxt />
    </main>
    <page-footer v-bind="pageFooter" />
  </div>
</template>

<script>

import {
  hydrateWhenVisible,
  hydrateOnInteraction,
  hydrateWhenIdle
} from 'vue-lazy-hydration';
import { loadFonts, prepareFonts, fontsToLinks } from '@/utils/fonts';
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
      preventMenuOpened: true,

      fonts: prepareFonts([
        {
          href: require('@/assets/fonts/amatic-sc-v12-latin-regular.woff2'),
          rel: 'preload',
          'data-set': 'amatic-sc',
          'data-weight': '400',
          'data-style': 'normal'
        }, {
          href: require('@/assets/fonts/amatic-sc-v12-latin-700.woff2'),
          rel: 'delay-prefetch',
          'data-set': 'amatic-sc',
          'data-weight': '700',
          'data-style': 'normal'
        }, {
          href: require('@/assets/fonts/raleway-v13-latin-regular.woff2'),
          rel: 'preload',
          'data-set': 'raleway',
          'data-weight': '400',
          'data-style': 'normal'
        }, {
          href: require('@/assets/fonts/raleway-v13-latin-500.woff2'),
          rel: 'delay-prefetch',
          'data-set': 'raleway',
          'data-weight': '500',
          'data-style': 'normal'
        }, {
          href: require('@/assets/fonts/raleway-v13-latin-600.woff2'),
          rel: 'delay-prefetch',
          'data-set': 'raleway',
          'data-weight': '600',
          'data-style': 'normal'
        }
      ])
    };
  },

  computed: {
    preventScrolling () {
      return this.$store.getters['layout/preventScrolling'];
    },
    pageHeader () {
      return this.$t('header');
    },
    pageMenu () {
      return this.$t('menu');
    },
    pageMenuButton () {
      return this.$t('menuButton');
    },
    pageFooter () {
      return this.$t('footer');
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
    seo.link = seo.link.concat(fontsToLinks(this.fonts));
    seo.htmlAttrs[String(DATA_ATTR_PREVENT_SCROLLING)] = this.preventScrolling;
    return seo;
  }
};

if (process.client) {
  loadFonts();
}

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

/* stylelint-disable */

/* amatic-sc-regular - latin */
@font-face {
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: local("Amatic SC Regular"), local("AmaticSC-Regular"),
    url("~assets/fonts/amatic-sc-v12-latin-regular.woff2") format("woff2"),
    url("~assets/fonts/amatic-sc-v12-latin-regular.woff") format("woff");
}

/* amatic-sc-700 - latin */
@font-face {
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: 700;
  font-display: fallback;
  unicode-range: U+000-5FF;
  src: local("Amatic SC Bold"), local("AmaticSC-Bold"),
    url("~assets/fonts/amatic-sc-v12-latin-700.woff2") format("woff2"),
    url("~assets/fonts/amatic-sc-v12-latin-700.woff") format("woff");
}

/* raleway-regular - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: local("Raleway"), local("Raleway-Regular"),
    url("~assets/fonts/raleway-v13-latin-regular.woff2") format("woff2"),
    url("~assets/fonts/raleway-v13-latin-regular.woff") format("woff");
}

/* raleway-500 - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: local("Raleway Medium"), local("Raleway-Medium"),
    url("~assets/fonts/raleway-v13-latin-500.woff2") format("woff2"),
    url("~assets/fonts/raleway-v13-latin-500.woff") format("woff");
}

/* raleway-600 - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: local("Raleway SemiBold"), local("Raleway-SemiBold"),
    url("~assets/fonts/raleway-v13-latin-600.woff2") format("woff2"),
    url("~assets/fonts/raleway-v13-latin-600.woff") format("woff");
}

/* stylelint-enable */
</style>

