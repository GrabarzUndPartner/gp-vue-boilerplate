<template>
  <div>
    <page-header :navigation="$t('header.navigation')" />
    <main>
      <nuxt />
    </main>
    <page-footer :navigation="$t('footer.navigation')" />
  </div>
</template>

<script>
import PageHeader from '../components/page/Header';
import PageFooter from '../components/page/Footer';

export default {
  components: {
    PageHeader,
    PageFooter
  },
  head () {
    return {
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
</style>

