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
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    };
  },
  data () {

    return {

    };
  },
  mounted () {
    global.addEventListener('load', () => {
      // loadFont('/fonts/amatic-sc-v12-latin-700.woff2', 'wf-amaticsc-n7-active');
      loadFont('/fonts/amatic-sc-v12-latin-regular.woff2', 'wf-amaticsc-n4-active');
      loadFont('/fonts/raleway-v13-latin-600.woff2', 'wf-raleway-n6-active');
      loadFont('/fonts/raleway-v13-latin-500.woff2', 'wf-raleway-n5-active');
      loadFont('/fonts/raleway-v13-latin-regular.woff2', 'wf-raleway-n4-active');
    });
  }
};

function loadFont (url, cssClass) {
  let link = document.createElement('link');
  link.rel = 'prefetch';
  link.onload = () => {
    document.documentElement.classList.add(cssClass);
  };
  link.href = url;
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossorigin = 'anonymous';
  document.querySelector('head').appendChild(link);
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
    url("/fonts/amatic-sc-v12-latin-regular.woff2") format("woff2"),
    url("/fonts/amatic-sc-v12-latin-regular.woff") format("woff");
}

/* amatic-sc-700 - latin */
@font-face {
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: local("Amatic SC Bold"), local("AmaticSC-Bold"),
    url("/fonts/amatic-sc-v12-latin-700.woff2") format("woff2"),
    url("/fonts/amatic-sc-v12-latin-700.woff") format("woff");
}

/* raleway-regular - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url("/fonts/raleway-v13-latin-regular.woff2") format("woff2"),
    url("/fonts/raleway-v13-latin-regular.woff") format("woff");
}
/* raleway-500 - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url("/fonts/raleway-v13-latin-500.woff2") format("woff2"),
    url("/fonts/raleway-v13-latin-500.woff") format("woff");
}
/* raleway-600 - latin */
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url("/fonts/raleway-v13-latin-600.woff2") format("woff2"),
    url("/fonts/raleway-v13-latin-600.woff") format("woff");
}

/* stylelint-enable */
</style>

