<template>
  <div>
    <gp-page-header
      v-bind="pageHeader"
      sticky
    />
    <gp-page-menu
      ref="pageMenu"
      v-bind="pageMenu"
      opened
    />
    <gp-page-menu-button @click.native="onClickMenuButton" />
    <main>
      <nuxt />
    </main>
    <gp-page-footer v-bind="pageFooter" />
  </div>
</template>

<script>

const STYLE_CLASS_PREVENT_SCROLLING = 'js--prevent-scrolling';

import { loadFonts } from '@/utils/fonts';

import gpPageHeader from '@/components/page/Header';
import gpPageMenuButton from '@/components/page/MenuButton';
import { directionDetectionObserver } from '@/service/viewport';

import {
  hydrateWhenVisible,
  hydrateOnInteraction
} from 'vue-lazy-hydration';

export default {

  components: {
    gpPageHeader,
    gpPageMenuButton,
    gpPageMenu: hydrateOnInteraction(() => import('@/components/page/Menu'), {
      event: 'hydrate'
    }),
    gpPageFooter: hydrateWhenVisible(
      () => import('@/components/page/Footer'),
      { observerOptions: { rootMargin: '100px' } }
    )
  },

  head () {
    const pattern = {
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    };

    const seo = this.$nuxtI18nSeo();
    return {
      htmlAttrs: seo.htmlAttrs,
      meta: seo.meta,
      link: this.fonts.preload.map((font) => {
        return Object.assign(font, pattern);
      }).concat(seo.link)
    };
  },

  data () {
    return {

      fonts: {
        preload: [
          {
            href: require('@/assets/fonts/amatic-sc-v12-latin-regular.woff2'),
            rel: 'preload',
            'data-set': 'amatic-sc',
            'data-weight': '400',
            onload: 'var options = event.target.dataset; document.documentElement.classList.add("font_" + options.set, "font_" + options.set + "_" + options.weight);'
          }, {
            href: require('@/assets/fonts/amatic-sc-v12-latin-700.woff2'),
            rel: 'delay-prefetch',
            'data-set': 'amatic-sc',
            'data-weight': '700'
          }, {
            href: require('@/assets/fonts/raleway-v13-latin-regular.woff2'),
            rel: 'preload',
            'data-set': 'raleway',
            'data-weight': '400',
            onload: 'var options = event.target.dataset; document.documentElement.classList.add("font_" + options.set, "font_" + options.set + "_" + options.weight);'
            // 'data-required': 'true'
          }, {
            href: require('@/assets/fonts/raleway-v13-latin-500.woff2'),
            rel: 'delay-prefetch',
            'data-set': 'raleway',
            'data-weight': '500'
          }, {
            href: require('@/assets/fonts/raleway-v13-latin-600.woff2'),
            rel: 'delay-prefetch',
            'data-set': 'raleway',
            'data-weight': '600'
          }
        ]
      }
    };
  },

  computed: {
    preventScrolling: function () {
      return this.$store.getters['layout/preventScrolling'];
    },
    pageHeader () {
      return this.$t('header');
    },
    pageMenu () {
      return this.$t('menu');
    },
    pageFooter () {
      return this.$t('footer');
    }
  },

  watch: {
    preventScrolling: function (value) {
      if (value) {
        document.documentElement.classList.add(STYLE_CLASS_PREVENT_SCROLLING);
      } else {
        document.documentElement.classList.remove(STYLE_CLASS_PREVENT_SCROLLING);
      }
    }
  },

  mounted () {

    this.subscriptions = [
      directionDetectionObserver.subscribe(this.onDirectionChange)
    ];

    /**
     * Tritt ein bei Seitenwechsel über nuxt router.scrollBehavior.js (@/app/router.scrollBehavior.js)
     * https://router.vuejs.org/guide/advanced/scroll-behavior.html
     * Setzt die direction wieder auf initial.
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
      this.$refs.pageMenu.$el.dispatchEvent(new CustomEvent('hydrate'));
    }
  },
};

if (process.client) {
  loadFonts();
}

</script>

<style lang="postcss">
body {
  margin: 0;
}

html.js--prevent-scrolling {
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

