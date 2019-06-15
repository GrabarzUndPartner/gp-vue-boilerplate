<i18n>
{
  "en": {
    "content": {
      "headline": "ARTICLE HEADLINE",
      "subline": "ARTICLE SUBLINE",
      "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna."
    }
  }
}
</i18n>

<template>
  <gp-article
    :headline="content.headline"
    :subline="content.subline"
    :class="{ visible: isVisible }"
  >
    <gp-text>
      {{ content.text }}
    </gp-text>
  </gp-article>
</template>

<script>

export default {
  components: {
    gpArticle: () => import(/* webpackMode: "eager" */'@/components/molecules/Article'),
    gpText: () => import(/* webpackMode: "eager" */'@/components/atoms/Text')
  },

  props: {
    content: {
      type: Object,
      default () {
        return this.$t('content', 'en');
      }
    }
  },

  data () {
    return {
      isVisible: process.browser ? true : false
    };
  }
};
</script>

<style>
</style>
