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
    hello2 huhu234 {{ $t('configxyz') }}
    {{ $t('test') }}
    <br>
    <MoleculeObjectDetector />
  </div>
</template>

<script>
import MoleculeObjectDetector from '@/components/molecules/ObjectDetector';

export default {
  nuxtI18n: {
    paths: {
      en: '/sub/projects',
      de: '/unter/projects'
    }
  },

  components: {
    MoleculeObjectDetector
  },

  head () {
    return {
      title: 'title of page'
    };
  }
};
</script>
