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
    <headline v-bind:content="$t('test')"></headline>
    hello22 {{$t('configxyz')}}
    {{ $t('test') }}
    <img src="~/assets/image.svg" />
    <img src="~/assets/image2.svg" />
    <img src="~/assets/image0.png.webp" />
  <br/>

  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';

export default {
  components: {
    headline: Headline
  }
};
</script>
