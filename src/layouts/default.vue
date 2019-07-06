<template>
  <div>
    <lazy-hydrate when-idle>
      <page-header :navigation="$t('header.navigation')" />
    </lazy-hydrate>
    <main>
      <nuxt />
    </main>
    <lazy-hydrate when-visible>
      <page-footer :navigation="$t('footer.navigation')" />
    </lazy-hydrate>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import(/* webpackMode: "eager" */'../components/page/Header'),
    PageFooter: () => import(/* webpackMode: "eager" */'../components/page/Footer')
  },
  head () {
    const pattern = {
      rel: 'preload',
      media: '(min-width: 0px)',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    };

    return {
      link: [
        Object.assign({ href: require('@/assets/fonts/amatic-sc-v12-latin-700.woff2') }, pattern),
        Object.assign({ href: require('@/assets/fonts/amatic-sc-v12-latin-regular.woff2') }, pattern),
        Object.assign({ href: require('@/assets/fonts/raleway-v13-latin-regular.woff2') }, pattern),
        Object.assign({ href: require('@/assets/fonts/raleway-v13-latin-500.woff2') }, pattern),
        Object.assign({ href: require('@/assets/fonts/raleway-v13-latin-600.woff2') }, pattern)
      ],
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    };
  }
};
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
  font-display: swap;
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
  src: url("~assets/fonts/raleway-v13-latin-regular.woff2") format("woff2"),
    url("~assets/fonts/raleway-v13-latin-regular.woff") format("woff");
}
/* raleway-500 - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url("~assets/fonts/raleway-v13-latin-500.woff2") format("woff2"),
    url("~assets/fonts/raleway-v13-latin-500.woff") format("woff");
}
/* raleway-600 - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url("~assets/fonts/raleway-v13-latin-600.woff2") format("woff2"),
    url("~assets/fonts/raleway-v13-latin-600.woff") format("woff");
}

/* stylelint-enable */
</style>

