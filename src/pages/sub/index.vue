<i18n>
{
  "en": {
    "test": "message23",
    "hello": "hello world!",
    "sources": [
      {"media": "default", "src": "sample/576x300.jpg"},
      {"media": "xs", "src": "sample/768x300.jpg"},
      {"media": "sm", "src": "sample/992x300.jpg"},
      {"media": "md", "src": "sample/1200x300.jpg"},
      {"media": "lg", "src": "sample/1600x300.jpg"},
      {"media": "xl", "src": "sample/1920x300.jpg"}
    ]
  },
  "de": {
    "test": "nachricht 123",
    "hello": "hallo welt",
    "sources": [
      {"media": "default", "src": "sample/576x300.jpg"},
      {"media": "xs", "src": "sample/768x300.jpg"},
      {"media": "sm", "src": "sample/992x300.jpg"},
      {"media": "md", "src": "sample/1200x300.jpg"},
      {"media": "lg", "src": "sample/1600x300.jpg"},
      {"media": "xl", "src": "sample/1920x300.jpg"}
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
    <picture-comp
      :sources="$t('sources')"
      alt="image description"
    />
  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';
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
