<i18n>
{
  "en": {
    "test": "message23",
    "hello": "hello world!",
    "sources": [
      {"media": "default", "src": "retina/sample-a/1152x600.jpg"},
      {"media": "xs", "src": "retina/sample-a/1536x600.jpg"},
      {"media": "sm", "src": "retina/sample-a/1984x600.jpg"},
      {"media": "md", "src": "retina/sample-a/2400x600.jpg"},
      {"media": "lg", "src": "retina/sample-a/3200x600.jpg"},
      {"media": "xl", "src": "retina/sample-a/3840x600.jpg"}
    ]
  },
  "de": {
    "test": "nachricht 123",
    "hello": "hallo welt",
    "sources": [
      {"media": "default", "src": "retina/sample-a/1152x600.jpg"},
      {"media": "xs", "src": "retina/sample-a/1536x600.jpg"},
      {"media": "sm", "src": "retina/sample-a/1984x600.jpg"},
      {"media": "md", "src": "retina/sample-a/2400x600.jpg"},
      {"media": "lg", "src": "retina/sample-a/3200x600.jpg"},
      {"media": "xl", "src": "retina/sample-a/3840x600.jpg"}
    ]
  }
}
</i18n>

<template>
  <div class="test">
    hello2 huhu234 {{ $t('configxyz') }}
    {{ $t('test') }}
    <br>
    <svg-inline src="image3.svg" />
    <svg-inline src="image2.svg" />
  </div>
</template>

<script>
import SvgInline from '@/components/atoms/SvgInline';

export default {
  nuxtI18n: {
    paths: {
      en: '/sub',
      de: '/unter'
    }
  },
  components: {
    SvgInline
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
