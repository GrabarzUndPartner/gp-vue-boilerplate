<template>
  <div>
    <page-header v-bind:navigation="$t('header.navigation')"></page-header>
    <main>
      <nuxt/>
    </main>
    <page-footer v-bind:navigation="$t('footer.navigation')"></page-footer>
  </div>
</template>

<script>
import PageHeader from '../components/page/Header';
import PageFooter from '../components/page/Footer';

export default {
  components: {
    PageHeader,
    PageFooter
  }
};

console.log('VOILA');
</script>
