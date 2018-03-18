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
    <h1>Headline</h1>
    <p>{{ $t('text') }}</p>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'title of page'
    };
  }
};
</script>
