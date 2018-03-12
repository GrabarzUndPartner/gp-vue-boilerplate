<i18n>
{
  "en": {
    "test": "message23",
    "hello": "hello world!"
  },
  "de": {
    "test": "nachricht 123",
    "hello": "hallo welt"
  }
}
</i18n>

<template>
  <div>
    <headline v-bind:content="$t('test')"></headline>
  hello2 huhu234 {{$t('configxyz')}}
    {{ $t('test') }}
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
