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

  }
};
</script>

<style lang="postcss">
body {
  margin: 0;
}
</style>

