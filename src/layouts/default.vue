<template>
  <div>
    <gp-page-header :navigation="$t('header.navigation')" />
    <main>
      <nuxt />
    </main>
    <gp-page-footer :navigation="$t('footer.navigation')" />
  </div>
</template>

<script>
import { loadFonts } from '@/utils/fonts';
import gpPageHeader from '@/components/page/Header';
import {
  hydrateWhenVisible
} from 'vue-lazy-hydration';

export default {
  components: {
    gpPageHeader,
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
            rel: 'delay-prefetch',
            'data-set': 'raleway',
            'data-weight': '400',
            'data-required': 'true'
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

