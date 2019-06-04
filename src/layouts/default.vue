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
// import PQueue from 'p-queue';

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

    // global.addEventListener('load', () => {
    //   Promise.all([
    //     loadFont('/fonts/amatic-sc-v12-latin-700.woff2'),
    //     // loadFont('/fonts/amatic-sc-v12-latin-regular.woff2'),
    //     // loadFont('/fonts/raleway-v13-latin-600.woff2'),
    //     // loadFont('/fonts/raleway-v13-latin-500.woff2'),
    //     loadFont('/fonts/raleway-v13-latin-regular.woff2')
    //   ]).then(() => {
    //     addClassToPage([
    //       'wf-amaticsc-n7-active', 'wf-amaticsc-n4-active', 'wf-raleway-n6-active', 'wf-raleway-n5-active', 'wf-raleway-n4-active'
    //     ]);
    //   });

    // Promise.all([
    //   loadFont('/fonts/amatic-sc-v12-latin-700.woff2')
    //     .then(() => addClassToPage('wf-amaticsc-n7-active')),
    //   loadFont('/fonts/amatic-sc-v12-latin-regular.woff2')
    //     .then(() => addClassToPage('wf-amaticsc-n4-active'))
    // ]).then(() => {
    //   setTimeout(() => {
    //     Promise.all([
    //       loadFont('/fonts/raleway-v13-latin-600.woff2')
    //         .then(() => addClassToPage('wf-raleway-n6-active')),
    //       loadFont('/fonts/raleway-v13-latin-500.woff2')
    //         .then(() => addClassToPage('wf-raleway-n5-active'))
    //     ]).then(() => {
    //       setTimeout(() => {
    //         loadFont('/fonts/raleway-v13-latin-regular.woff2')
    //           .then(() => addClassToPage('wf-raleway-n4-active'));
    //       }, 10);
    //     });
    //   }, 10);
    // });

    // const queue = new PQueue({ concurrency: 2 });
    // queue.add(() => loadFont('/fonts/amatic-sc-v12-latin-700.woff2'), { priority: 1 })
    //   .then(() => addClassToPage('wf-amaticsc-n7-active'));
    // queue.add(() => loadFont('/fonts/amatic-sc-v12-latin-regular.woff2'), { priority: 1 })
    //   .then(() => addClassToPage('wf-amaticsc-n4-active'));
    // queue.add(() => loadFont('/fonts/raleway-v13-latin-600.woff2'))
    //   .then(() => addClassToPage('wf-raleway-n6-active'));
    // queue.add(() => loadFont('/fonts/raleway-v13-latin-500.woff2'))
    //   .then(() => addClassToPage('wf-raleway-n5-active'));
    // queue.add(() => loadFont('/fonts/raleway-v13-latin-regular.woff2'))
    //   .then(() => addClassToPage('wf-raleway-n4-active'));
    // });
  }
};

// function loadFont (url) {
//   return new Promise((resolve) => {
//     global.requestIdleCallback(() => {
//       let link = document.createElement('link');
//       link.rel = 'prefetch';
//       link.onload = () => {
//         resolve();
//       };
//       link.href = url;
//       link.as = 'font';
//       link.type = 'font/woff2';
//       link.crossorigin = 'anonymous';
//       document.querySelector('head').appendChild(link);
//     });
//   });
// }

// function addClassToPage (className) {
//   global.requestIdleCallback(() => {
//     document.documentElement.classList.add(...className);
//   });
// }
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

