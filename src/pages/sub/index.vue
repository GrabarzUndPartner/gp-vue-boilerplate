<i18n>
{
  "en": {
    "test": "message23",
    "hello": "hello world!",
    "sources": [
      {"media": "default", "src": "retina/1152x600.jpg"},
      {"media": "xs", "src": "retina/1536x600.jpg"},
      {"media": "sm", "src": "retina/1984x600.jpg"},
      {"media": "md", "src": "retina/2400x600.jpg"},
      {"media": "lg", "src": "retina/3200x600.jpg"},
      {"media": "xl", "src": "retina/3840x600.jpg"}
    ]
  },
  "de": {
    "test": "nachricht 123",
    "hello": "hallo welt",
    "sources": [
      {"media": "default", "src": "retina/1152x600.jpg"},
      {"media": "xs", "src": "retina/1536x600.jpg"},
      {"media": "sm", "src": "retina/1984x600.jpg"},
      {"media": "md", "src": "retina/2400x600.jpg"},
      {"media": "lg", "src": "retina/3200x600.jpg"},
      {"media": "xl", "src": "retina/3840x600.jpg"}
    ]
  }
}
</i18n>

<template>
  <div class="test">
    <headline :content="$t('test')" />
    hello2 huhu234 {{ $t('configxyz') }}
    {{ $t('test') }}
    <br>
    <svg-inline src="image3.svg" />
    <svg-inline src="image2.svg" />
    <picture-comp
      :sources="$t('sources')"
      alt="image description"
    />
  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';
import SvgInline from '@/components/atoms/SvgInline';
import PictureComp from '~/components/atoms/Picture';

export default {
  nuxtI18n: {
    paths: {
      en: '/sub',
      de: '/unter'
    }
  },
  components: {
    Headline,
    SvgInline,
    PictureComp
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

<style lang="postcss">
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
