<i18n>
{
  "en": {
    "test": "message 123456789",
    "hello": "hello world!"
  },
  "de": {
    "test": "nachricht 12",
    "hello": "hallo welt"
  }
}
</i18n>

<template>
  <div>
    <headline :content="$t('test')"/>
    hello22 {{ $t('configxyz') }}
    {{ $t('test') }}

    hello
    <img
      src="~/assets/image.svg"
      alt="test">
    <img
      src="~/assets/image2.svg"
      alt="test">
    <img
      src="~/assets/image3.svg"
      alt="test">
    <img
      src="~/assets/image0.png"
      alt="test">
    <img
      src="~/assets/image0.png24.png"
      alt="test">
    <img
      src="~/assets/image1.png.webp"
      alt="test">
    <img
      src="~/assets/image0.jpg"
      alt="test">
    <img
      src="~/assets/image0.jpg.webp"
      alt="test">
    <br>

  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';

export default {
  components: {
    headline: Headline
  },

  head () {
    return {
      title: 'title of page'
    };
  }
};
</script>
