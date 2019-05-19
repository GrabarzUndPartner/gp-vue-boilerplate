<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="spriteContent" />
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
import sprite from 'svg-sprite-loader/runtime/sprite.build';

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
  },
  data () {   
    return {
      spriteContent: sprite.stringify()
    };
  },
  mounted () {
    this.spriteContent = sprite.stringify();
  }
};
</script>

<style lang="postcss">
body {
  margin: 0;
}
</style>

