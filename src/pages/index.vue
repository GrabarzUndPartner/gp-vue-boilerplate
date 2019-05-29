<i18n>
{
  "de": {
    "text": "Ich bin die Startseite12"
  },
  "en": {
    "text": "I'm the homepage"
  }
}
</i18n>

<template>
  <div class="content">
    <h1>Headline</h1>
    <p>{{ $t('text') }}</p>
    <!-- <img
      :src="source"
      alt="test"
    >
    <img
      :src="sourceWebp"
      alt="test"
    > -->
    <svg-inline src="image3.svg" />
    <svg-inline src="image2.svg" />
    <!-- <img src="@/assets/svg/image2.svg"> -->
  </div>
</template>

<script>
import SvgInline from '@/components/atoms/SvgInline';

export default {
  components: {
    SvgInline
  },
  head () {
    return {
      title: 'title of page'
    };
  },

  data () {
    return {
      img: 'image0.png',
      test: 'image2.svg'
    };
  },

  computed: {
    source () {
      return require(`~/assets/${this.img}?resize&nonretina`);
    },
    sourceWebp () {
      return require(`~/assets/${this.img}?webp`);
    }
  }
};
</script>
