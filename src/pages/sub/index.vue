<i18n>
{
  "en": {

  },
  "de": {

  }
}
</i18n>

<template>
  <div class="test">
    <molecule-open-cv />
  </div>
</template>

<script>
import MoleculeOpenCv from '@/components/molecules/OpenCv';

export default {
  nuxtI18n: {
    paths: {
      en: '/sub',
      de: '/unter'
    }
  },
  components: {
    MoleculeOpenCv
  },
  data () {
    return {

    };
  },

  head () {
    return {
      title: 'title of page'
    };
  },

  mounted () {
    // console.log(this.$t('sources'));
  }
};
</script>

<style lang="postcss" scoped>
picture img {
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (--xs) {
    object-fit: contain;
  }

  @media (--sm) {
    object-fit: fill;
  }

  @media (--md) {
    object-fit: cover;
  }

  @media (--lg) {
    object-fit: contain;
  }

  @media (--xl) {
    object-fit: fill;
  }

  @media (--xxl) {
    object-fit: cover;
  }
}
</style>
