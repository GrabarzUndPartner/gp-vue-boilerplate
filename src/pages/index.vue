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
    <svg-elem src="image3.svg" />
    <svg-elem
      src="image2.svg"
      :inline="true"
    />
  </div>
</template>

<script>
import SvgElem from '@/components/atoms/Svg';

export default {
  components: {
    SvgElem
  },
  head () {
    return {
      title: 'title of page'
    };
  },

  data () {
    return {
      test: 'image2.svg',
    };
  }
};
</script>
