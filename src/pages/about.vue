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
    hello22 {{ $t('configxyz') }}
    {{ $t('hello') }}
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/about',
      de: '/ueber'
    }
  },

  components: {

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
    passing (value) {
      console.log('AHA', value.intersection.y, value.intersectionRatio);
    },

    enter () {
      console.log('enter');
    },

    leave () {
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

