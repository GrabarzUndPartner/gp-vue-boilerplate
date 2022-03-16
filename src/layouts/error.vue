
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
              sources: [
                { src: '/img/error.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
              ],
              title: String(this.error.statusCode),
              alt: String(this.error.statusCode)
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
