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
    <div style="border:solid red 1px">
      <svg-symbol src="@/assets/image2.svg" />
    </div>
    <svg>
      <use xlink:href="@/assets/image2.svg" />
    </svg>
    <svg>
      <use xlink:href="_nuxt/sprite.svg#image2" />
    </svg>
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
