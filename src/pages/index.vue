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
    <gp-stage />
    <gp-headline-text />

    <h1>Headline</h1>
    <p>{{ $t('text') }}</p>

    <svg-inline src="image3.svg" />
    <svg-inline src="image2.svg" />
    <!-- <img src="@/assets/svg/image2.svg"> -->
  </div>
</template>

<script>
import gpStage from '@/components/organisms/Stage';
import gpHeadlineText from '@/components/organisms/article/HeadlineText';
import SvgInline from '@/components/atoms/SvgInline';

export default {
  components: {
    gpStage,
    gpHeadlineText,
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
  }
};
</script>
