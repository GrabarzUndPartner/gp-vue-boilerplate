
<template>
  <div class="content">
    <component
      :is="item.component"
      v-for="(item, index) in components"
      :key="index"
      v-bind="item.data"
    />
  </div>
</template>

<script>
import ComponentsExtend from '@/extends/Components';
export default {

  extends: ComponentsExtend,

  props: {
    error: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  head () {
    return {
      title: this.error.statusCode
    };
  },

  computed: {
    components () {
      return [
        {
          component: 'StagePicture',
          data: {
            picture: {
              sourceClientOnly: false,
              sources: [
                {
                  media: 'default',
                  srcset: 'img/error.jpg'
                }
              ]
            }
          }
        },
        {
          component: 'ArticleText',
          data: {
            article: {
              headline: {
                overline: null,
                headline: String(this.error.statusCode),
                subline: null
              },
              content: `<p>${this.error.message}</p>`
            }
          }
        }
      ];
    }
  }

};
</script>

<style>
</style>
