<i18n src="@/locales/about.lang">
{
  "en": {
    "test": "message 123456789",
    "hello": "hello world!"
  },
  "de": {
    "test": "nachricht 122",
    "hello": "hallo welt"
  }
}
</i18n>

<template>
  <div>
    <headline :content="$t('test')"/>
    hello22 {{ $t('configxyz') }}
    {{ $t('hello') }}
    <img
      src="~/assets/image.svg"
      alt="test">
    <img
      src="~/assets/image2.svg"
      alt="test">
    <img
      src="~/assets/image0.png"
      alt="test">

    <intersect
      @enter="enter"
      @leave="leave"
      @passing="passing">
      <img
        src="~/assets/image2.png"
        alt="test">
    </intersect>

    <img
      src="@/assets/image1.png.webp"
      alt="test">
    <img
      src="@/assets/image1.png.webp"
      alt="test">
    <img
      src="@/assets/image1.png.webp"
      alt="test">
    <img
      src="~/assets/image0.jpg"
      alt="test">

  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';

export default {
  nuxtI18n: {
    paths: {
      en: '/about',
      de: '/ueber'
    }
  },
  components: {
    Headline
  },

  head () {
    return {
      title: 'title of page'
    };
  },

  data () {
    return {
      msg: 'I will change'
    };
  },

  methods: {
    passing(value) {
      console.log('AHA', value.intersection.y, value.intersectionRatio);
    },

    enter() {
      console.log('enter');
    },

    leave() {
      console.log('leave');
    }
  }
};
</script>

<style lang="postcss">
img {
  display: block;
  width: 100%;
}
</style>

